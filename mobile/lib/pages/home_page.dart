import 'package:flutter/material.dart';
import '../widgets/hero_section.dart';
import '../widgets/products_section.dart';
import '../widgets/top_products_section.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: ListView(
        children: [
          HeroSection(),
          SizedBox(height: 20),
          ProductsSection(),
          SizedBox(height: 20),
          TopProductsSection(),
          SizedBox(height: 40),
        ],
      ),
    );
  }
}
