import 'package:flutter/material.dart';
import 'package:open_weather_example_flutter/src/constants/app_colors.dart';
import 'package:open_weather_example_flutter/src/features/weather/presentation/city_search_box.dart';
import 'package:open_weather_example_flutter/src/features/weather/presentation/current_weather.dart';
import 'package:open_weather_example_flutter/src/features/weather/presentation/hourly_weather.dart';

class WeatherPage extends StatelessWidget {
  const WeatherPage({Key? key, required this.city}) : super(key: key);
  final String city;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: AppColors.rainGradient,
          ),
        ),
        child: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisSize: MainAxisSize.min,
            children: [
              // Add a futuristic header
              Container(
                padding: const EdgeInsets.symmetric(vertical: 24),
                child: Text(
                  'Weather',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              CitySearchBox(),
              SizedBox(height: 24),
              CurrentWeather(),
              SizedBox(height: 24),
              HourlyWeather(),
              Spacer(),
            ],
          ),
        ),
      ),
    );
  }
}
