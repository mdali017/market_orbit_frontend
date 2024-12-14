import React, { useState } from 'react';
import { 
  Table, 
  Button, 
  Modal, 
  Form, 
  Input, 
  Upload, 
  Switch, 
  message 
} from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  CopyOutlined 
} from '@ant-design/icons';

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  active: boolean;
}

const VendorProductsManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Sample Product',
      price: 99.99,
      stock: 50,
      active: true
    }
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `$${price.toFixed(2)}`
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Status',
      dataIndex: 'active',
      key: 'active',
      render: (active: boolean) => active ? 'Active' : 'Inactive'
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: Product) => (
        <div className="flex space-x-2">
          <Button 
            icon={<EditOutlined />} 
            onClick={() => handleEditProduct(record)}
          />
          <Button 
            icon={<CopyOutlined />} 
            onClick={() => handleDuplicateProduct(record)}
          />
          <Button 
            danger 
            icon={<DeleteOutlined />} 
            onClick={() => handleDeleteProduct(record.id)}
          />
        </div>
      )
    }
  ];

  const handleAddProduct = () => {
    setCurrentProduct(null);
    setIsModalVisible(true);
  };

  const handleEditProduct = (product: Product) => {
    setCurrentProduct(product);
    setIsModalVisible(true);
  };

  const handleDuplicateProduct = (product: Product) => {
    const duplicatedProduct = {
      ...product,
      id: `${Date.now()}`,
      name: `Copy of ${product.name}`
    };
    setProducts([...products, duplicatedProduct]);
    message.success('Product duplicated successfully');
  };

  const handleDeleteProduct = (id: string) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this product?',
      onOk() {
        setProducts(products.filter(p => p.id !== id));
        message.success('Product deleted successfully');
      }
    });
  };

  const onFinish = (values: any) => {
    if (currentProduct) {
      // Edit existing product
      setProducts(products.map(p => 
        p.id === currentProduct.id 
          ? {...p, ...values} 
          : p
      ));
    } else {
      // Add new product
      const newProduct = {
        id: `${Date.now()}`,
        ...values,
        active: true
      };
      setProducts([...products, newProduct]);
    }
    setIsModalVisible(false);
    message.success(currentProduct ? 'Product updated' : 'Product added');
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">My Products</h1>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={handleAddProduct}
        >
          Add Product
        </Button>
      </div>

      <Table 
        columns={columns} 
        dataSource={products}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title={currentProduct ? 'Edit Product' : 'Add New Product'}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={currentProduct || {}}
        >
          <Form.Item
            name="name"
            label="Product Name"
            rules={[{ required: true, message: 'Please input product name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input price' }]}
          >
            <Input type="number" prefix="$" />
          </Form.Item>

          <Form.Item
            name="stock"
            label="Stock Quantity"
            rules={[{ required: true, message: 'Please input stock quantity' }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {currentProduct ? 'Update Product' : 'Add Product'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default VendorProductsManagement;