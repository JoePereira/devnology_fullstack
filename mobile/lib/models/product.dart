class Product {
  final String id;
  final String name;
  final String description;
  final String image;
  final double price;

  Product({
    required this.id,
    required this.name,
    required this.description,
    required this.image,
    required this.price,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'].toString(),
      name: json['name'],
      description: json['description'] ?? '',
      image: json['image'] ?? '',
      price: (json['price'] as num).toDouble(),
    );
  }
}
