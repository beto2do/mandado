import { ReactNode } from "react";
import { ObjectId } from "mongodb";
export interface Product {
  _id: string;
  name: string;
  status: ProductStatus;
  isGrabbed: boolean;
  category: string;
  calories?: number;
  fat?: number;
  carbs?: number;
  protein?: number;
  isOutOfStock: boolean;
}

export type DocumentProduct = Omit<Product, "_id"> & { _id: ObjectId };

export type IdProduct = Product["_id"];

export type IdProductForm = Product["_id"] | undefined;

export type InsertProduct = Omit<Product, "_id">;

export type UpdateProduct = Required<Product>;

export enum ErrorProductProp {
  name = "name",
  category = "category",
  calories = "calories",
  fat = "fat",
  carbs = "carbs",
  protein = "protein",
}

export class ProductPayload implements Required<Product> {
  _id: string = "";
  name: string = "";
  status: ProductStatus = ProductStatus.VIEW;
  isGrabbed: boolean = false;
  category: string = "";
  calories: number = 0;
  fat: number = 0;
  carbs: number = 0;
  protein: number = 0;
  isOutOfStock: boolean = true;

  errors: ErrorProductProp[] = [];

  constructor(product?: Product) {
    if (product) {
      this.name = product.name;
      this.status = product.status;
      this.isGrabbed = product.isGrabbed;
      this.category = product.category;
      this.calories = product.calories ?? 0;
      this.fat = product.fat ?? 0;
      this.carbs = product.carbs ?? 0;
      this.protein = product.protein ?? 0;
      this.isOutOfStock = product.isOutOfStock;
    }
  }

  validate() {
    if (!this.name) {
      this.errors.push(ErrorProductProp.name);
    }
    if (!this.category) {
      this.errors.push(ErrorProductProp.category);
    }
    if (!this.calories) {
      this.errors.push(ErrorProductProp.calories);
    }
    if (!this.fat) {
      this.errors.push(ErrorProductProp.fat);
    }
    if (!this.carbs) {
      this.errors.push(ErrorProductProp.carbs);
    }
    if (!this.protein) {
      this.errors.push(ErrorProductProp.protein);
    }
  }

  getErrors(): { totalErrors: number; errors: ErrorProductProp[] } {
    this.errors = [];
    this.validate();
    return { totalErrors: this.errors.length, errors: this.errors };
  }

  getUpdateProduct(id: string): UpdateProduct {
    return {
      _id: id,
      name: this.name,
      status: this.status,
      isGrabbed: this.isGrabbed,
      category: this.category,
      calories: this.calories,
      fat: this.fat,
      carbs: this.carbs,
      protein: this.protein,
      isOutOfStock: this.isOutOfStock,
    };
  }

  getInsertProduct(): InsertProduct {
    return {
      name: this.name,
      status: this.status,
      isGrabbed: this.isGrabbed,
      category: this.category,
      calories: this.calories,
      fat: this.fat,
      carbs: this.carbs,
      protein: this.protein,
      isOutOfStock: this.isOutOfStock,
    };
  }
}
export interface ShoppingSliceState {
  products: Product[];
}

export interface ProductSliceState {
  products: Product[];
  status: string;
  creationStatus: string;
  error?: string;
}

export enum ProductStatus {
  EDITION = "EDITION",
  VIEW = "VIEW",
}

export interface ProductFields {
  name: string;
  label: string;
  error: boolean | undefined;
  helperText: ReactNode;
  type: "number" | "text";
  value?: unknown;
}
