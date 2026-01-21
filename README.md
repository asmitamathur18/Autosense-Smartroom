Autosense Smartroom

Autosense Smartroom is an IoT-based smart room automation system that monitors environmental conditions and controls room appliances intelligently. The system uses an ESP32 microcontroller with multiple sensors and actuators, Firebase as a cloud middleware, and a JavaScript-based web dashboard for real-time monitoring, control, and energy reporting.

The project demonstrates a complete IoT workflow involving hardware integration, cloud-based data synchronization, and a user-friendly frontend interface.

Project Objectives

Automate room lighting and fan operation

Detect human presence using an IR motion sensor

Monitor temperature and humidity in real time

Enable remote monitoring and control through a web dashboard

Track daily energy usage and estimate power conservation

Implement a complete IoT architecture suitable for academic and practical use

System Architecture

The project follows a three-layer IoT architecture:

Hardware Layer – Sensors, actuators, and ESP32

Middleware Layer – Firebase Realtime Database

Application Layer – Web dashboard using JavaScript

Hardware Components
Microcontroller

ESP32 Development Board

Acts as the central controller of the system

Reads data from sensors and controls actuators

Connects to WiFi and communicates with Firebase

Handles automation logic and real-time updates

Sensors

IR Sensor (Motion Sensor)

Detects human movement or presence in the room

Used to trigger automation logic and alerts

Helps reduce energy consumption by enabling presence-based control

DHT22 Temperature and Humidity Sensor

Measures ambient temperature and relative humidity

Provides accurate digital readings

Used for fan automation and environment monitoring

Actuators

DC Motor (Fan)

Represents the room fan

Controlled by the ESP32 through a driver or relay circuit

Can operate in AUTO, ON, or OFF modes

Light (LED / Load controlled via ESP32)

Represents room lighting

Controlled using ESP32 GPIO pins

Operates in AUTO, ON, or OFF modes

Power Supply

Provides regulated power to ESP32 and connected components

Ensures stable operation of sensors and actuators

Software Components
Embedded Logic (Python – Thonny)

A Python script written and tested using Thonny

Used to simulate:

Sensor readings

Automation logic

Device control behavior

Included for demonstration, logic validation, and documentation

Not part of the live ESP32 deployment

Web Application

Built using:

HTML

CSS

JavaScript

Responsibilities:

Display live room status

Show temperature, humidity, and motion state

Allow manual and automatic control of fan and light

Display alerts and last updated time

Generate daily energy usage reports

Firebase Integration

Firebase Realtime Database is used as the middleware between the ESP32 and the web dashboard.

Role of Firebase

Stores real-time sensor data:

Temperature

Humidity

Motion status

Stores actuator states:

Fan mode

Light mode

Enables real-time synchronization between hardware and frontend

Stores usage duration data for energy reporting

Security Notice

Firebase API keys and credentials have been removed from this public repository for security reasons.
To run the project completely, users must configure their own Firebase project and update the credentials locally.

Working of the System

Sensors (IR and DHT22) collect environmental data.

ESP32 reads sensor values and applies automation logic.

Sensor data and device states are uploaded to Firebase.

The web dashboard fetches live data from Firebase.

Users can:

Monitor room conditions

Control fan and light modes (AUTO / ON / OFF)

Control commands are written back to Firebase.

ESP32 reads updated commands and controls the actuators.

Usage duration is logged and used for energy calculation.

Dashboard Features

Live room status display

Motion detection using IR sensor

Real-time temperature and humidity values

Fan and light control with AUTO / ON / OFF modes

Alerts section

Last updated timestamp

Daily energy usage and power conservation report

Energy Monitoring Logic

ON time for fan and light is recorded

Energy consumption is calculated using predefined power ratings

Daily report includes:

Fan ON duration

Light ON duration

Total energy consumed (kWh)

Estimated power conserved through automation

Project Structure
autosense-smartroom/
│
├── Pages/                 # HTML pages for the web dashboard
│   ├── index.html         # Home page
│   ├── dashboard.html     # Live room monitoring dashboard
│   ├── process.html       # System working explanation
│   ├── energy.html        # Daily energy usage report
│   └── about.html         # Project information
│
├── CSS/                   # Stylesheets
│   └── style.css
│
├── JS/                    # JavaScript logic
│   ├── dashboard.js       # Dashboard and Firebase logic
│   └── navbar.js          # Navigation handling
│
├── Assets/                # Images and visual assets
│   └── *.jpg / *.png
│
├── screenshots/           # Output and hardware screenshots
│   ├── pic1.png
│   ├── pic2.png
│   ├── pic3.jpeg
│   └── pic4.png
│
├── smartroom.py           # Python simulation code (Thonny)
└── README.md


How to Run the Project
Frontend

Clone the repository

Open index.html in a browser

Add your Firebase configuration in script.js to enable live data

Hardware

Flash ESP32 with the required firmware locally

Connect IR sensor, DHT22, fan, and light to ESP32

Ensure WiFi connectivity and Firebase access

Limitations

Live GitHub demo does not display real-time data due to removed Firebase credentials

Hardware-dependent features require physical components

Future Enhancements

User authentication and access control

Mobile application support

Advanced energy analytics

Notification and alert system

Integration with voice assistants

Conclusion

Autosense Smartroom presents a complete IoT-based automation solution integrating sensors, actuators, cloud middleware, and a web interface. The project emphasizes real-time monitoring, intelligent control, and energy efficiency, making it suitable for academic evaluation and future expansion.