import 'dart:io' show Platform;

class AppConstants {
  static String get baseUrl {
    if (Platform.isAndroid) {
      return 'http://10.0.2.2:3001';
    } else if (Platform.isIOS) {
      return 'http://localhost:3001';
    } else {
      return 'http://localhost:3001';
    }
  }
}
