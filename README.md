# 🚗 Motogen: Intelligent Car Maintenance Companion

<p align="center">
  <a href="assets/images/app_icon.png">
    <img src="assets/images/app_icon.png" alt="Motogen Logo" width="120">
  </a>
</p>

**Motogen** is a cutting-edge mobile app designed to revolutionize car maintenance for Persian-speaking users. Built with Flutter for high-performance Android experiences, it empowers vehicle owners to track refueling, oil changes, repairs, purchases, and timely reminders—all while integrating an AI-powered chatbot for personalized advice. This repository focuses exclusively on the Flutter frontend (developed by me), which connects to a robust NestJS backend with PostgreSQL database via RESTful APIs for real-time data synchronization and secure user experiences.

The app is now live on Cafe Bazaar! Download it here: [Cafe Bazaar Link] .

As a live project (version 1.0.0), it's actively evolving with new features and updates.

## 🔍 Why Motogen?
In a world where car maintenance can be overwhelming, Motogen simplifies it all. Imagine getting urgent reminders for oil changes, insurance renewals, or tire pressure checks right on your home screen. Or chatting with an AI that knows your exact car model and provides tailored troubleshooting tips. Built with responsiveness in mind, it adapts beautifully to any device while maintaining a lightweight footprint of just 18.8 MB. Whether you're a busy driver or a mechanic enthusiast, Motogen turns routine tasks into effortless habits—saving time, money, and headaches.

## ✨ Key Features
Motogen is packed with intuitive features to make car care proactive and engaging:

- **Secure Login and Onboarding**: Users start with phone number authentication, followed by guided onboarding to set up their first car. Select from a real-world database of vehicles (no fictional entries)—ensuring accuracy from day one.
  
- **Home Screen Dashboard**: A sleek interface with four dedicated tabs for tracking essentials:
  - **Refuel**: Log fuel-ups with ease.
  - **Oil Management**: Handle four oil types (Engine, Gearbox, Brake, Steering). For engines, track four key filters (Oil Filter, Air Filter, Cabin Filter, Fuel Filter) to prevent breakdowns.
  - **Repair**: Record and monitor vehicle repairs.
  - **Purchases**: Keep tabs on parts and accessories bought.

- **Smart Reminders System**: Set customizable reminders for critical maintenance tasks, triggered by date or mileage (KM). Examples include:
  - Engine oil checks, radiator water levels, tire pressure adjustments.
  - Specialized tasks like brake oil changes, timing belt replacements, or insurance validity (e.g., body/third-party insurance, vehicle inspection).
  - Track remaining days/mileage with visual progress (using Percent Indicator). Urgent reminders (e.g., expiring soon) pop up prominently on the home screen. Reset them easily with optional dates for ongoing tracking.

- **AI-Powered Chatbot**: Engage in natural conversations about your car. The chatbot sends your vehicle's specifics to the backend AI, delivering reasoned, model-specific responses—perfect for quick queries like "Why is my engine overheating?"

- **Multi-Car Support (In Progress)**: Currently supports one car per user, with seamless updates to car info, user profile (name, last name), and more. Future updates will allow adding multiple vehicles.

- **Global Error Handling and Resilience**:
  - Catches all errors (sync/async, widget-related) and displays a user-friendly crash page instead of cryptic red screens.
  - App versioning: If the app is outdated, it prompts a forced update page. Unavailable features show a "Stay tuned for future updates" message.
  - No internet? A dedicated "No Connection" page appears, with a retry option to resume once online.

- **User Experience Enhancements**:
  - Lazy loading with Lazy Load Indexed Stack for smooth performance.
  - Custom snack bars for API success/error feedback.
  - Confirm bottom sheets for critical actions.
  - Lottie animations for engaging loading states.
  - Persian (Farsi) localization with Shamsi Date for intuitive date displays (while storing in Gregorian for backend compatibility).
  - Markdown rendering for rich chatbot responses.

- **Security First**:
  - Jailbreak/root detection using Jailbreak Root Detection package: Untrusted devices (e.g., jailbroken, rooted, or emulators) are blocked with a banned page on startup.
  - Secure token storage via Flutter Secure Storage.
  - Automatic token refresh: If an access token expires during API calls, it seamlessly refreshes and retries.

All data is handled via RESTful APIs from the integrated NestJS backend, with no local storage—ensuring everything stays synced and secure.

## 🛠️ Technologies and Architecture
Motogen is engineered for scalability and maintainability, following best practices to keep the codebase clean and efficient:

- **Framework**: Flutter (cross-platform mobile development).
- **Architecture**: Feature-based MVVM (Model-View-ViewModel) with SOLID principles and OOP for DRY (Don't Repeat Yourself) code. This modular structure makes adding features a breeze while ensuring testability and separation of concerns. I kept the code efficient by profiling and optimizing with Flutter DevTools, focusing on performance metrics like frame rates, memory usage, and widget rebuilds to deliver a snappy user experience.
- **State Management**: Riverpod for reactive, efficient state handling without boilerplate.
- **API Integration**: Centralized HTTP functions (using `http` package) for GET, POST, PATCH, DELETE. Includes token-based authentication, automatic refresh on expiry, and custom exceptions (e.g., for updates or socket errors like no internet). This integrates seamlessly with the NestJS/PostgreSQL backend (developed separately).
- **Responsive Design**: Flutter ScreenUtil for pixel-perfect layouts across devices.
- **Other Tech**: Environment variables via Flutter Dotenv (e.g., base URLs), Package Info Plus for app versioning checks, URL Launcher for external links (e.g., updates or contact emails).

This setup handles real-world scenarios like network failures, security threats, and dynamic updates effectively.

## 📦 Packages Used
Motogen leverages a curated set of packages for optimal performance and features:

- `flutter_screenutil`: Responsive UI scaling.
- `flutter_svg`: Vector graphics support.
- `flutter_riverpod`: State management.
- `http`: API requests.
- `logger`: Debugging logs.
- `shamsi_date`: Persian date handling.
- `flutter_secure_storage`: Secure token storage.
- `flutter_inner_shadow`: Custom UI effects.
- `percent_indicator`: Visual progress for reminders.
- `intl`: Internationalization.
- `equatable`: Immutable data classes.
- `flutter_markdown`: Rendering AI chat responses.
- `url_launcher`: Opening external URLs (e.g., updates).
- `lazy_load_indexed_stack`: Efficient lazy loading.
- `lottie`: Animated loading indicators.
- `flutter_dotenv`: Environment configuration.
- `package_info_plus`: App version management.
- `jailbreak_root_detection`: Device trust verification.

These choices keep the app lightweight (18.8 MB) while delivering a premium experience.

## 🚀 Upcoming Features
Motogen is a live project with exciting updates on the horizon to enhance functionality and user engagement:

- Full multi-car support: Add, switch, and manage multiple vehicles seamlessly.
- Push notifications and personalized reminders for timely alerts.
- Detailed statistics for your car and its services, providing insights into maintenance history and trends.
- Advanced AI integrations: Deeper chatbot capabilities, like predictive maintenance suggestions based on driving patterns.
- Nearby repair shop search to easily find trusted service providers.
- And more...

These features will build on the solid foundation, ensuring Motogen remains a leader in smart car maintenance.

## 📬 Contact and Resources
- **GitHub Repository**: [https://github.com/Mahan-Saljoughian/MotoGen](https://github.com/Mahan-Saljoughian/MotoGen)  
- **Website**: [motogenapp.ir](https://motogenapp.ir/)  
- **Contact**: For app-related questions or feedback, email [renovateam2024@gmail.com](mailto:renovateam2024@gmail.com)

- **App Version**: 1.0.0 (Actively maintained with versioning checks)

Feel free to star this repo if Motogen inspires you—feedback and contributions are welcome as we grow!
