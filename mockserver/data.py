EVENTS_DATA = [
    {
        'event_id': 0,
        'event_name': 'Suspicious scan',
        'event_type': 'Surveillance',
        'event_time': '1.6.16 10:00:00',
        'event_description': 'The attacker used NMap to scan some hosts'
    },
    {
        'event_id': 1,
        'event_name': 'Password change',
        'event_type': 'Credentials',
        'event_time': '2.6.16 17:30:00',
        'event_description': 'Domain admin user "admin01" password was changed according to the organization\'s policy'
    },
    {
        'event_id': 2,
        'event_name': 'Failed login attempt',
        'event_type': 'Login',
        'event_time': '3.6.16 11:00:00',
        'event_description': 'The attacker tried to login to DC01 with false credentials'
    },
    {
        'event_id': 3,
        'event_name': 'Failed login attempt',
        'event_type': 'Login',
        'event_time': '3.6.16 11:02:00',
        'event_description': 'The attacker tried to login to EXCHANGE01 with false credentials'
    },
    {
        'event_id': 4,
        'event_name': 'Successful login attempt',
        'event_type': 'Login',
        'event_time': '3.6.16 11:05:00',
        'event_description': 'The attacker connected to MAILBOX01 with stolen credentials of the user "envmanager"'
    },
    {
        'event_id': 5,
        'event_name': 'Malware installation',
        'event_type': 'Installation',
        'event_time': '3.6.16 11:07:00',
        'event_description': 'The attacker installed a PWDumper on MAILBOX01'
    },
    {
        'event_id': 6,
        'event_name': 'Very big exfiltration',
        'event_type': 'Exfiltration',
        'event_time': '3.6.16 11:15:00',
        'event_description': 'The attacker stole around 5 GB of e-mail related files'
    },
    {
        'event_id': 7,
        'event_name': 'Suspicious connection',
        'event_type': 'Connection',
        'event_time': '4.6.16 14:00:00',
        'event_description': 'A suspicious connection from a local ip address was made to MAILBOX01'
    },
    {
        'event_id': 8,
        'event_name': 'Victory!',
        'event_type': 'Apprehension',
        'event_time': '5.6.16 13:00:00',
        'event_description': 'The attacker was apprehended and sent to jail! We won!'
    }
]
