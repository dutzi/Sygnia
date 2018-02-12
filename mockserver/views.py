from flask import render_template, Blueprint, json, request

from . import config
from .data import EVENTS_DATA

app_views = Blueprint('app_views', __name__, template_folder=config.TEMPLATE_FOLDER)


def _search(request_data, objects_list):
    """
    Search for the given term in the given objects list, and return matching objects.

    :param request_data: The request data.
    :param objects_list: The list of object JSONs to search in.
    :return: The list of matching objects, or the entire list if no filtering term was given.
    """
    data = json.loads(request_data) if request_data else {}
    term = data.get('query')
    if not term:
        return json.dumps(objects_list)
    term = term.lower()
    results = []
    for event in objects_list:
        for value in event.values():
            if isinstance(value, str) and term in value.lower():
                results.append(event)
                break
    return json.dumps(results)


@app_views.route('/api/events', methods=['POST'])
def search_events():
    return _search(request.data, EVENTS_DATA)
