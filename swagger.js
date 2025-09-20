// swagger.js (đặt ở thư mục gốc)
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CRUD Demo API",
      version: "1.0.0",
      description: "Tài liệu API cho ứng dụng CRUD Demo (Products & Suppliers)",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    tags: [
      { name: "Products", description: "API quản lý sản phẩm" },
      { name: "Suppliers", description: "API quản lý nhà cung cấp" },
    ],
  },
  apis: [], // sau này bạn có thể thêm jsdoc từ controllers/routes nếu muốn
};

// 👉 Định nghĩa paths riêng (products + suppliers)
const paths = {
  "/products": {
    get: {
      tags: ["Products"],
      summary: "Lấy danh sách sản phẩm",
      responses: {
        200: { description: "Danh sách sản phẩm" },
      },
    },
    post: {
      tags: ["Products"],
      summary: "Thêm sản phẩm mới",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "price"],
              properties: {
                name: { type: "string" },
                price: { type: "number" },
                quantity: { type: "integer" },
                supplier: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Tạo sản phẩm thành công" },
      },
    },
  },
  "/products/{id}": {
    get: {
      tags: ["Products"],
      summary: "Lấy chi tiết sản phẩm",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: {
        200: { description: "Thông tin sản phẩm" },
        404: { description: "Không tìm thấy" },
      },
    },
    put: {
      tags: ["Products"],
      summary: "Cập nhật sản phẩm",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string" },
                price: { type: "number" },
                quantity: { type: "integer" },
                supplier: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Cập nhật thành công" },
        404: { description: "Không tìm thấy" },
      },
    },
    delete: {
      tags: ["Products"],
      summary: "Xóa sản phẩm",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: {
        200: { description: "Xóa thành công" },
        404: { description: "Không tìm thấy" },
      },
    },
  },
  "/suppliers": {
    get: {
      tags: ["Suppliers"],
      summary: "Lấy danh sách nhà cung cấp",
      responses: {
        200: { description: "Danh sách nhà cung cấp" },
      },
    },
    post: {
      tags: ["Suppliers"],
      summary: "Thêm nhà cung cấp mới",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "phone"],
              properties: {
                name: { type: "string" },
                address: { type: "string" },
                phone: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Tạo mới thành công" },
      },
    },
  },
  "/suppliers/{id}": {
    get: {
      tags: ["Suppliers"],
      summary: "Lấy thông tin nhà cung cấp",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: {
        200: { description: "Thông tin nhà cung cấp" },
        404: { description: "Không tìm thấy" },
      },
    },
    put: {
      tags: ["Suppliers"],
      summary: "Cập nhật nhà cung cấp",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string" },
                address: { type: "string" },
                phone: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Cập nhật thành công" },
        404: { description: "Không tìm thấy" },
      },
    },
    delete: {
      tags: ["Suppliers"],
      summary: "Xóa nhà cung cấp",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: {
        200: { description: "Xóa thành công" },
        404: { description: "Không tìm thấy" },
      },
    },
  },
};

// export function để dùng trong app.js
module.exports = (app) => {
  const swaggerDocs = swaggerJsDoc(options);
  // gắn paths thủ công
  swaggerDocs.paths = paths;
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
