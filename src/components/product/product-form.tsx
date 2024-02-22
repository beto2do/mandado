"use client";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {
  FormControlError,
  SnackbarModel,
  ProductPayload,
  ErrorProductProp,
  ProductFields,
  IdProductForm,
} from "@/models";
import { FormEvent, ChangeEvent, useState, useEffect } from "react";
import {
  globalSnackbarSlice,
  useSelector,
  useDispatch,
  selectSnackbar,
  selectProductById,
  createProduct,
} from "@/lib/redux";

export function ProductForm({ productId, onSuccessful }: {productId?: IdProductForm, onSuccessful: any }) {
  const defaultError = { error: false, msg: "" };
  const nameMessage = "Product Name is required";
  const categoryMessage = "Category is required";
  const caloriesMessage = "Calories field is required";
  const fatMessage = "Fat field is required";
  const carbsMessage = "Carbs field is required";
  const proteinMessage = "Protein field is required";
  let formTitle = "Add New Product";
  let submitButtonLabel = "Create";
  const [productProperties, setProductProperties] = useState<ProductPayload>(
    new ProductPayload(),
  );
  const [nameError, setNameError] = useState<FormControlError>(defaultError);
  const [categoryError, setCategoryError] =
    useState<FormControlError>(defaultError);
  const [caloriesError, setCaloriesError] =
    useState<FormControlError>(defaultError);
  const [fatError, setFatError] = useState<FormControlError>(defaultError);
  const [carbsError, setCarbsError] = useState<FormControlError>(defaultError);
  const [proteinError, setProteinError] =
    useState<FormControlError>(defaultError);
  const snackbar: SnackbarModel = useSelector(selectSnackbar);
  const dispatch = useDispatch();
  const creationStatus = useSelector((state) => state.product.creationStatus);
  const updateProduct = useSelector((state) => selectProductById(state,productId));

  useEffect(() => {
    let ignore = false;

    if (creationStatus === "succeeded") {
      if (!ignore) {
        dispatch(
          globalSnackbarSlice.actions.showSnackBar({
            ...snackbar,
            message: "A product has been created",
            open: true,
          }),
        );
        onSuccessful();
      }
    }

    return () => {
      ignore = true;
    };
  }, [creationStatus, dispatch]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateProperties()) {
      dispatch(createProduct(productProperties.getInsertProduct()));
    }
  }

  function validateProperties() {
    let { totalErrors, errors } = productProperties.getErrors();

    setNameError(defaultError);
    setCategoryError(defaultError);
    setCaloriesError(defaultError);
    setFatError(defaultError);
    setCarbsError(defaultError);
    setProteinError(defaultError);

    if (errors.includes(ErrorProductProp.name)) {
      setNameError({ error: true, msg: nameMessage });
    }
    if (errors.includes(ErrorProductProp.category)) {
      setCategoryError({ error: true, msg: categoryMessage });
    }
    if (errors.includes(ErrorProductProp.calories)) {
      setCaloriesError({ error: true, msg: caloriesMessage });
    }
    if (errors.includes(ErrorProductProp.fat)) {
      setFatError({ error: true, msg: fatMessage });
    }
    if (errors.includes(ErrorProductProp.carbs)) {
      setCarbsError({ error: true, msg: carbsMessage });
    }
    if (errors.includes(ErrorProductProp.protein)) {
      setProteinError({ error: true, msg: proteinMessage });
    }

    return totalErrors === 0;
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checked?: boolean,
  ) => {
    const name = event.target.name;
    const value = name === "isOutOfStock" ? checked : event.target.value;
    setProductProperties((properties) => ({
      ...properties,
      getErrors: properties.getErrors,
      validate: properties.validate,
      errors: properties.errors,
      getInsertProduct: properties.getInsertProduct,
      [name]: value,
    }));
  };

  const fieldsData: ProductFields[] = [
    {
      name: "name",
      label: "name",
      error: nameError.error,
      helperText: nameError.msg,
      value: updateProduct?.name,
      type: "text",
    },
    {
      name: "category",
      label: "category",
      error: categoryError.error,
      helperText: categoryError.msg,
      value: updateProduct?.category,
      type: "text",
    },
    {
      name: "calories",
      label: "calories",
      error: caloriesError.error,
      helperText: caloriesError.msg,
      value: updateProduct?.calories,
      type: "number",
    },
    {
      name: "fat",
      label: "fat",
      error: fatError.error,
      helperText: fatError.msg,
      value: updateProduct?.fat,
      type: "number",
    },
    {
      name: "carbs",
      label: "carbs",
      error: carbsError.error,
      helperText: carbsError.msg,
      value: updateProduct?.carbs,
      type: "number",
    },
    {
      name: "protein",
      label: "protein",
      error: proteinError.error,
      helperText: proteinError.msg,
      value: updateProduct?.protein,
      type: "number",
    },
  ];

  const muiFields = fieldsData.map((productField) => (
    <TextField
      key={productField.name}
      name={productField.name}
      label={productField.label}
      error={productField.error}
      helperText={productField.helperText}
      className="my-2"
      variant="outlined"
      fullWidth
      type={productField.type}
      value={productField.value}
      autoComplete="off"
      onChange={handleChange}
    />
  ));
  return (
    <form className="mx-3 my-2.5" onSubmit={handleSubmit}>
      <h2>{formTitle}</h2>
      {muiFields}
      <div>
        <FormControlLabel
          name="isOutOfStock"
          control={<Switch defaultChecked={updateProduct?.isOutOfStock} onChange={handleChange} />}
          label="Out of Stock"
        />
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          size="small"
          variant="contained"
          className="pointer-events-auto text-white hover:bg-red-400 hover:border-0 border-0"
        >
          <AddIcon className="text-white" /> {submitButtonLabel}
        </Button>
      </div>
    </form>
  );
}
