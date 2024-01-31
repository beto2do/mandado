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
} from "@/models";
import { FormEvent, ChangeEvent, useState } from "react";
import { createNewProduct } from "@/services";
import {
  globalSnackbarSlice,
  useSelector,
  useDispatch,
  selectSnackbar,
} from "@/lib/redux";

export function ProductForm({ onSuccessful }: { onSuccessful: any }) {
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateProperties()) {
      createNewProduct(productProperties.getInsertProduct()).then((data) => {
        //TODO refresh products table
        dispatch(
          globalSnackbarSlice.actions.showSnackBar({
            ...snackbar,
            message: "A product has been created",
            open: true,
          }),
        );
        onSuccessful();
      });
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
      type: "text",
    },
    {
      name: "category",
      label: "category",
      error: categoryError.error,
      helperText: categoryError.msg,
      type: "text",
    },
    {
      name: "calories",
      label: "calories",
      error: caloriesError.error,
      helperText: caloriesError.msg,
      type: "number",
    },
    {
      name: "fat",
      label: "fat",
      error: fatError.error,
      helperText: fatError.msg,
      type: "number",
    },
    {
      name: "carbs",
      label: "carbs",
      error: carbsError.error,
      helperText: carbsError.msg,
      type: "number",
    },
    {
      name: "protein",
      label: "protein",
      error: proteinError.error,
      helperText: proteinError.msg,
      type: "number",
    },
  ];

  const muiFields = fieldsData.map((productField) => (
    <TextField
      name={productField.name}
      label={productField.label}
      error={productField.error}
      helperText={productField.helperText}
      className="my-2"
      variant="outlined"
      fullWidth
      type={productField.type}
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
          control={<Switch defaultChecked onChange={handleChange} />}
          label="Out of Stock"
        />
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          size="small"
          variant="contained"
          className="pointer-events-auto bg-red-500 text-white hover:bg-red-400 hover:border-0 border-0"
          sx={{ backgroundColor: "#ef4444" }}
        >
          <AddIcon className="text-white" /> {submitButtonLabel}
        </Button>
      </div>
    </form>
  );
}
