import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:devnology_app/models/product.dart';

class ApiService {
  static const String baseUrl = 'http://localhost:3000';

  static Future<List<Product>> getAllProducts() async {
    final response = await http.get(Uri.parse('$baseUrl/products'));

    if (response.statusCode == 200) {
      final List<dynamic> jsonList = json.decode(response.body);
      return jsonList.map((json) => Product.fromJson(json)).toList();
    } else {
      throw Exception('Erro ao buscar produtos');
    }
  }
}
