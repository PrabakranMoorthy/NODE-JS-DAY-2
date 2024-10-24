const products = [
  { id: 1, name: "iphone", price: 25000 },
  { id: 2, name: "laptop", price: 55000 },
  { id: 3, name: "mointor", price: 35000 },
  { id: 4, name: "realme", price: 28000 },
  { id: 5, name: "headphone", price: 32000 },
];

export const getproducts = (req, res) => {
  res
    .status(200)
    .json({ message: "products retireved successfully", data: products });
};

//get method by id

export const getProductByID = (req, res) => {
  const productId = req.params.id;
  //console.log("productId", productId);

  const productDetails = products.find((ele) => ele.id == productId);
  if (!productDetails) {
    return res.status(404).json({ message: "Page Not Found" });
  }

  res
    .status(200)
    .json({ message: "Product Retrieved Successfully", data: productDetails });
};

//Post method

export const createProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
  };

  products.push(newProduct);
  res
    .status(200)
    .json({ message: "Product Added Successfully", data: newProduct });
};

//put /update method

export const updateProduct = (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;
  const index = products.findIndex((ele) => ele.id == productId);
  if (index === -1) {
    returnres.status(404).json({ message: "Product Not Found" });
  }
  products[index].name = name;
  products[index].price = price;
  res
    .status(200)
    .json({ message: "Product Updated Successfully", data: products[index] });
};

//Delete method

export const deleteProduct = (req, res) => {
  const productId = req.params.id;
  const index = products.findIndex((ele) => ele.id == productId);
  if (index === -1) {
    return res.status(404).json({ message: "Product Not Found" });
  }
  products.splice(index, 1);
  res.status(200).json({ message: "Product deleted Successfully" });
};
