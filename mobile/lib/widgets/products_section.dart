import 'package:flutter/material.dart';
import 'package:devnology_app/api/api_service.dart';
import 'package:devnology_app/models/product.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';

class ProductsSection extends StatefulWidget {
  const ProductsSection({Key? key}) : super(key: key);

  @override
  State<ProductsSection> createState() => _ProductsSectionState();
}

class _ProductsSectionState extends State<ProductsSection> {
  List<Product> products = [];
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    loadProducts();
  }

  Future<void> loadProducts() async {
    final fetched = await ApiService.getAllProducts();
    setState(() {
      products = fetched.sublist(80, fetched.length > 85 ? 85 : fetched.length);
      isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 32.0, horizontal: 16.0),
      child: Column(
        children: [
          const Text(
            'Produtos mais vendidos',
            style: TextStyle(fontSize: 14, color: Colors.purple),
          ),
          const SizedBox(height: 8),
          const Text(
            'Produtos',
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 4),
          const Text(
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 12, color: Colors.grey),
          ),
          const SizedBox(height: 32),
          isLoading
              ? const CircularProgressIndicator()
              : GridView.builder(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    crossAxisSpacing: 16,
                    mainAxisSpacing: 16,
                    childAspectRatio: 0.7,
                  ),
                  itemCount: products.length,
                  itemBuilder: (context, index) {
                    final product = products[index];
                    return Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(12),
                        color: Theme.of(context).cardColor,
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.05),
                            blurRadius: 6,
                            offset: const Offset(0, 4),
                          ),
                        ],
                      ),
                      padding: const EdgeInsets.all(8),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(8),
                              child: Image.network(
                                product.image,
                                fit: BoxFit.cover,
                                width: double.infinity,
                              ),
                            ),
                          ),
                          const SizedBox(height: 8),
                          Text(product.name,
                              style: const TextStyle(
                                  fontWeight: FontWeight.bold)),
                          Text(product.description,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style:
                                  const TextStyle(color: Colors.grey, fontSize: 12)),
                          const SizedBox(height: 4),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              RatingBarIndicator(
                                rating: 5.0,
                                itemBuilder: (context, _) =>
                                    const Icon(Icons.star, color: Colors.amber),
                                itemCount: 1,
                                itemSize: 16.0,
                              ),
                              Text(
                                'R\$ ${product.price.toStringAsFixed(2)}',
                                style: const TextStyle(
                                    fontWeight: FontWeight.bold),
                              )
                            ],
                          )
                        ],
                      ),
                    );
                  },
                ),
          const SizedBox(height: 24),
          ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.purple[900],
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30)),
            ),
            onPressed: () {
              Navigator.pushNamed(context, '/produtos');
            },
            child: const Text('Ver Todos'),
          )
        ],
      ),
    );
  }
}
