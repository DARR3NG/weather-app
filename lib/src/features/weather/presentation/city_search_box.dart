import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:open_weather_example_flutter/src/constants/app_colors.dart';
import 'package:open_weather_example_flutter/src/features/weather/application/providers.dart';

class CitySearchBox extends ConsumerStatefulWidget {
  const CitySearchBox({super.key});

  @override
  ConsumerState<CitySearchBox> createState() => _CitySearchBoxState();
}

class _CitySearchBoxState extends ConsumerState<CitySearchBox> {
  static const double _radius = 30.0;

  late final TextEditingController _searchController;

  @override
  void initState() {
    super.initState();
    _searchController = TextEditingController(text: ref.read(cityProvider));
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20.0),
      child: SizedBox(
        height: _radius * 2,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _buildSearchTextField(),
            _buildSearchButton(),
          ],
        ),
      ),
    );
  }

  Widget _buildSearchTextField() {
    return Expanded(
      child: TextField(
        controller: _searchController,
        textAlign: TextAlign.center,
        style: const TextStyle(color: Colors.black),
        decoration: InputDecoration(
          fillColor: Colors.white,
          filled: true,
          border: OutlineInputBorder(
            borderRadius: BorderRadius.only(
              topLeft: Radius.circular(_radius),
              bottomLeft: Radius.circular(_radius),
            ),
          ),
        ),
        onSubmitted: (value) =>
            ref.read(cityProvider.notifier).state = value,
      ),
    );
  }

  Widget _buildSearchButton() {
    return InkWell(
      child: Container(
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: AppColors.accentColor,
          borderRadius: BorderRadius.only(
            topRight: Radius.circular(_radius),
            bottomRight: Radius.circular(_radius),
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 15.0),
          child: Text(
            'Search',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
        ),
      ),
      onTap: () {
        FocusScope.of(context).unfocus();
        ref.read(cityProvider.notifier).state = _searchController.text;
      },
    );
  }
}
