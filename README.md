AutoSense SmartRoom
Cloud-Connected IoT Room Automation System
AutoSense SmartRoom is a cloud-connected IoT system designed to automate room appliances based on environmental conditions and human presence. The system integrates ESP32-based embedded control, real-time cloud synchronization using Firebase, and a web dashboard for live monitoring and control.
The project demonstrates an end-to-end IoT pipeline — from sensor data acquisition and device control to cloud middleware and frontend visualization.

Problem Statement
Conventional room automation systems often require manual control or isolated local logic. This project aims to:
Reduce manual intervention using sensor-driven automation
Enable real-time remote monitoring
Centralize control using a cloud-based middleware
Demonstrate scalable IoT architecture suitable for smart environments

Solution Overview
AutoSense SmartRoom uses ESP32 as the edge device to collect sensor data and control appliances. Firebase Realtime Database acts as a cloud middleware, enabling bidirectional communication between hardware and a web-based dashboard.

The system supports both:
Autonomous operation (sensor-driven logic)
User-driven control (via web interface)

Core Features
Real-time temperature and humidity monitoring
Motion-based appliance automation using IR sensor
Cloud-synced device state management
Web dashboard for live status visualization
Two-way communication between hardware and UI
Modular, scalable architecture

Technology Stack
Hardware
ESP32 microcontroller
DHT22 sensor (temperature & humidity)
IR motion sensor

Relay module
Electrical load (fan / light)

Software
Python (ESP32 programming using Thonny)
Firebase Realtime Database (cloud middleware)
HTML, CSS, JavaScript (frontend dashboard)

System Architecture
Data Flow:
Sensors → ESP32 → Firebase → Web Dashboard
Web Commands → Firebase → ESP32 → Relay → Appliances

Firebase decouples the hardware and frontend layers, enabling scalability and real-time synchronization.

Functional Workflow
ESP32 continuously reads sensor data.
Motion detection triggers automatic appliance control.
Sensor readings and device states are pushed to Firebase.
The web dashboard listens for real-time updates.
User control actions update Firebase values.
ESP32 polls Firebase and applies control logic accordingly.

Project Structure

autosense-smartroom/
│
├── Assets/                # Images and visual assets
│   ├── connections.jpg
│   ├── microcontroller.jpg
│   ├── theme.jpg
│   └── ...
│
├── CSS/
│   └── style.css          # Application styling
│
├── JS/
│   ├── dashboard.js       # Firebase integration & dashboard logic
│   └── navbar.js          # Navigation handling
│
├── Pages/
│   ├── index.html         # Landing page
│   ├── dashboard.html     # Live room monitoring dashboard
│   ├── energy.html        # Energy usage report
│   ├── process.html       # System workflow explanation
│   └── about.html         # Project overview
│
├── pic1.png               # Output / hardware screenshots
├── pic2.png
├── pic3.jpeg
├── pic4.png
│
├── smartroom.py           # ESP32 control logic (Python - Thonny)
└── README.md


Setup & Deployment
Hardware
Sensors and relay are interfaced with ESP32 GPIO pins
ESP32 is powered via USB or external supply

Cloud
Firebase Realtime Database configured for live read/write
Database rules allow controlled access for ESP32 and web client

Firmware
Code uploaded to ESP32 using Thonny IDE
ESP32 interpreter selected for Python execution

Frontend
Dashboard served as a static web page
Firebase SDK integrated for real-time updates

Reliability & Design Considerations
Cloud middleware ensures loose coupling between components
Real-time database minimizes latency
Modular code structure allows future expansion
System supports both automatic and manual override modes

Use Cases
Smart homes
Energy-efficient room automation
Office and classroom environments
IoT demonstrations and academic research prototypes

Future Scope
Role-based authentication
Mobile application integration
Advanced automation rules
Energy usage analytics
Voice assistant support

Author
Asmita Mathur
Engineering Undergraduate - 2nd year 1st sem
Interests: IoT Systems, Embedded Programming, Cloud-Integrated Applications

Note to Reviewers
This project focuses on system integration and architecture, rather than isolated sensor demonstrations. It is designed to reflect practical IoT workflows used in real-world smart automation systems.

⭐ If this repository was useful, feel free to star it.
