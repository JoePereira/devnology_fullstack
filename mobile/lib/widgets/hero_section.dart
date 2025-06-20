import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';

class HeroSection extends StatelessWidget {
  final List<Map<String, dynamic>> items = [
    {
      'image': 'assets/images/brasil.png',
      'title': 'Mercadorias de excelente qualidade brasileira',
      'description':
          'Produtos com a essência do Brasil, fabricados com carinho e excelência.',
      'buttonTitle': 'Produtos Brasileiros',
      'url': '/produtos'
    },
    {
      'image': 'assets/images/europa.png',
      'title': 'Mercadorias de excelente qualidade europeia',
      'description':
          'Sofisticação e qualidade diretamente do mercado europeu.',
      'buttonTitle': 'Produtos Europeus',
      'url': '/produtos'
    },
    {
      'image': 'assets/images/carrinho_de_compras.png',
      'title': 'Novo ecommerce no mercado! Conheça a Devnology Store',
      'description':
          'Os melhores produtos em um só lugar. Navegue e aproveite.',
      'buttonTitle': 'Início',
      'url': '/'
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 400,
      width: double.infinity,
      color: Theme.of(context).brightness == Brightness.dark
          ? Colors.grey[900]
          : Colors.grey[100],
      child: CarouselSlider(
        options: CarouselOptions(
          height: double.infinity,
          autoPlay: true,
          autoPlayInterval: const Duration(seconds: 4),
          viewportFraction: 1.0,
        ),
        items: items.map((data) {
          return Builder(
            builder: (BuildContext context) {
              return Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Row(
                  children: [
                    // Coluna de texto maior
                    Expanded(
                      flex: 6,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            data['title'],
                            style: Theme.of(context).textTheme.titleLarge?.copyWith(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 20,
                                ),
                          ),
                          const SizedBox(height: 12),
                          Text(
                            data['description'],
                            style: TextStyle(
                              fontSize: 14,
                              color: Colors.grey[600],
                            ),
                          ),
                          const SizedBox(height: 20),
                          ElevatedButton(
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.purple[900],
                              shape: const StadiumBorder(),
                              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                            ),
                            onPressed: () {
                              Navigator.pushNamed(context, data['url']);
                            },
                            child: Text(
                              data['buttonTitle'],
                              style: const TextStyle(fontSize: 14),
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(width: 20),

                    // Imagem menor
                    Expanded(
                      flex: 4,
                      child: Image.asset(
                        data['image'],
                        height: 200,
                        width: 200,
                        fit: BoxFit.contain,
                      ),
                    ),
                  ],
                ),
              );
            },
          );
        }).toList(),
      ),
    );
  }
}
