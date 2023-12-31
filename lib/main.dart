import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:open_weather_example_flutter/src/features/weather/presentation/weather_page.dart';

void main() {
  runApp(const ProviderScope(child: MyApp()));
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Weather App',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.light,
        primaryColor: Colors.blue, // Set your primary color
        hintColor: Colors.cyan, // Set your accent color
        textTheme: TextTheme(
          headline6: TextStyle(
            color: Colors.white,
            fontSize: 24,
            fontWeight: FontWeight.bold,
            shadows: [
              BoxShadow(
                color: Colors.black12.withOpacity(0.25),
                spreadRadius: 1,
                blurRadius: 4,
                offset: const Offset(0, 0.5),
              ),
            ],
          ),
          bodyText1: TextStyle(
            color: Colors.white,
            fontSize: 16,
            shadows: [
              BoxShadow(
                color: Colors.black12.withOpacity(0.25),
                spreadRadius: 1,
                blurRadius: 4,
                offset: const Offset(0, 0.5),
              ),
            ],
          ),
          bodyText2: TextStyle(
            color: Colors.white70,
            fontSize: 13,
            shadows: [
              BoxShadow(
                color: Colors.black12.withOpacity(0.25),
                spreadRadius: 1,
                blurRadius: 4,
                offset: const Offset(0, 0.5),
              ),
            ],
          ),
        ),
      ),
      home: const WeatherPage(city: 'Marraekch'),
    );
  }
}
