# React Native CLI Project Setup

Welcome to the React Native CLI Project! This document will guide you through the steps required to set up the project on your system and run the code successfully.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14 or later)
- **npm** (version 6 or later) or **Yarn** (version 1.22.10 or later)
- **Watchman** (for macOS users)
- **JDK** (Java Development Kit) - version 11 or later
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

### Installing Node.js and npm

You can download and install Node.js and npm from the [official Node.js website](https://nodejs.org/).

### Installing Watchman (macOS only)

Install Watchman using Homebrew:

```sh
brew install watchman
```

### Installing JDK

You can download and install the JDK from the [AdoptOpenJDK website](https://adoptopenjdk.net/).

### Installing Android Studio

Download and install Android Studio from the [official website](https://developer.android.com/studio).

### Installing Xcode (macOS only)

Download and install Xcode from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12).

## Setting Up the React Native CLI

1. **Install React Native CLI globally:**

   ```sh
   npm install -g react-native-cli
   ```

2. **Initialize a new React Native project:**

   ```sh
   react-native init MyProject
   ```

3. **Navigate to the project directory:**

   ```sh
   cd MyProject
   ```

## Running the Project

### Running on Android

1. **Start the Android emulator:**

   Open Android Studio, go to `AVD Manager`, and start an emulator.

2. **Run the React Native project:**

   ```sh
   npx react-native run-android
   ```

### Running on iOS (macOS only)

1. **Start the iOS simulator:**

   Open Xcode, go to `Preferences` -> `Components` and install a simulator if necessary. Then, in the Xcode toolbar, select the desired simulator and start it.

2. **Run the React Native project:**

   ```sh
   npx react-native run-ios
   ```

## Common Issues and Troubleshooting

### Metro Bundler is stuck on loading

- Ensure all instances of `node` are closed.
- Restart the Metro Bundler:

  ```sh
  npx react-native start
  ```

### Error: Unable to load script from assets 'index.android.bundle'

- Make sure your emulator is running.
- Ensure the Android emulator is connected by running:

  ```sh
  adb devices
  ```

- If the device is not listed, restart the adb server:

  ```sh
  adb kill-server
  adb start-server
  ```

### iOS build failed with error code 65

- Open the project in Xcode:

  ```sh
  open ios/MyProject.xcworkspace
  ```

- Go to `Product` -> `Clean Build Folder`.
- Rebuild the project.

### Other Issues

If you encounter other issues, refer to the [React Native documentation](https://reactnative.dev/docs/getting-started) for detailed guidance and troubleshooting steps.

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch`
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using the React Native CLI Project! If you have any questions or need further assistance, feel free to open an issue in the repository. Happy coding!
