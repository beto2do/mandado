import { ProductStatus, Product } from '@/models'
import { PantryTable } from '@/components/pantry'

function createData(
    id: string,
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ): Product {
    const status = ProductStatus.VIEW;
    const isGrabbed = false;
    const category = 'Desserts';
    return {id, name, status, isGrabbed, category, calories, fat, carbs, protein };
  }

const products = [
    createData('1','Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('2','Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('3','Eclair', 262, 16.0, 24, 6.0),
    createData('4','Cupcake', 305, 3.7, 67, 4.3),
    createData('5','Gingerbread', 356, 16.0, 49, 3.9),
  ];

export function Pantry() {
    return (
        <>
            <PantryTable products={products}/>
        </>
    );
}