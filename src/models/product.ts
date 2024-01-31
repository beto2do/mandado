import { ReactNode } from "react";
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

export type IdProduct = Product["_id"];

export type InsertProduct = Omit<Product, "_id">;

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
  editableProduct?: Product;
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
}
