from django.shortcuts import render
from rest_framework import viewsets,status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import ProductoSerializer,UsuarioSerializer,RolSerializer,Detalle_PedidoSerializer,PedidoSerializer
from .models import Producto,Usuario,Rol,Detalle_Pedido,Pedido

# Create your views here.
class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()

class RolesView(viewsets.ModelViewSet):
    serializer_class = RolSerializer
    queryset = Rol.objects.all()

class DetallePedidoView(viewsets.ModelViewSet):
    serializer_class = Detalle_PedidoSerializer
    queryset = Detalle_Pedido.objects.all()

class PedidoView(viewsets.ModelViewSet):
    serializer_class = PedidoSerializer
    queryset = Pedido.objects.all()

@api_view(['POST'])
def update_stock(request):
    try:
        for item in request.data.get('products', []):
            product = Producto.objects.get(id=item['cod_producto'])
            product.stock -= item['quantity']
            product.save()
        return Response({"message": "Stock updated successfully"}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)