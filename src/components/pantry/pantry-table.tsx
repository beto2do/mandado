import { TableCellBaseProps } from '@mui/material/TableCell/TableCell'
import { TableRows, TableCell, TableHeaders } from '@/models'
import { TableView } from '@/components/common'

function createHeader(category: string): TableHeaders[] {
    return [
        {
            label: category, 
            align: undefined
        },
        {
            label: 'Calories', 
            align: 'right'
        },
        {
            label: 'Fat', 
            align: 'right'
        },
        {
            label: 'Carbs', 
            align: 'right'
        },
        {
            label: 'Protein', 
            align: 'right'
        },
    ];
}

function createDessertRows(): TableRows[] {
    return [
        createRow('1', [
            createTableCell('Pie', undefined, 'th', 'row', 'out of stock'),
            createTableCell('159', 'right', undefined, undefined, undefined),
            createTableCell('6.0', 'right', undefined, undefined, undefined),
            createTableCell('24', 'right', undefined, undefined, undefined),
            createTableCell('4.0', 'right', undefined, undefined, undefined)
        ]),
        createRow('2', [
            createTableCell('Ice cream sandwich', undefined, 'th', 'row', 'out of stock'),
            createTableCell('237', 'right', undefined, undefined, undefined),
            createTableCell('9.0', 'right', undefined, undefined, undefined),
            createTableCell('37', 'right', undefined, undefined, undefined),
            createTableCell('4.3', 'right', undefined, undefined, undefined)
        ]),
        createRow('3', [
            createTableCell('Eclair', undefined, 'th', 'row', undefined),
            createTableCell('237', 'right', undefined, undefined, undefined),
            createTableCell('9.0', 'right', undefined, undefined, undefined),
            createTableCell('37', 'right', undefined, undefined, undefined),
            createTableCell('4.3', 'right', undefined, undefined, undefined)
        ]),
        createRow('4', [
            createTableCell('Cupcake', undefined, 'th', 'row', undefined),
            createTableCell('237', 'right', undefined, undefined, undefined),
            createTableCell('9.0', 'right', undefined, undefined, undefined),
            createTableCell('37', 'right', undefined, undefined, undefined),
            createTableCell('4.3', 'right', undefined, undefined, undefined)
        ]),
        createRow('5', [
            createTableCell('Gingerbread', undefined, 'th', 'row', 'out of stock'),
            createTableCell('237', 'right', undefined, undefined, undefined),
            createTableCell('9.0', 'right', undefined, undefined, undefined),
            createTableCell('37', 'right', undefined, undefined, undefined),
            createTableCell('4.3', 'right', undefined, undefined, undefined)
        ])
    ]
}

function createDairyRows(): TableRows[] {
    return [
        createRow('6', [
            createTableCell('Milk', undefined, 'th', 'row', undefined),
            createTableCell('237', 'right', undefined, undefined, undefined),
            createTableCell('9.0', 'right', undefined, undefined, undefined),
            createTableCell('37', 'right', undefined, undefined, undefined),
            createTableCell('4.3', 'right', undefined, undefined, undefined)
        ]),
        createRow('7', [
            createTableCell('Cheese', undefined, 'th', 'row', 'out of stock'),
            createTableCell('237', 'right', undefined, undefined, undefined),
            createTableCell('9.0', 'right', undefined, undefined, undefined),
            createTableCell('37', 'right', undefined, undefined, undefined),
            createTableCell('4.3', 'right', undefined, undefined, undefined)
        ]),
        createRow('8', [
            createTableCell('Yogurt', undefined, 'th', 'row', undefined),
            createTableCell('237', 'right', undefined, undefined, undefined),
            createTableCell('9.0', 'right', undefined, undefined, undefined),
            createTableCell('37', 'right', undefined, undefined, undefined),
            createTableCell('4.3', 'right', undefined, undefined, undefined)
        ])
    ]
}
function createRow(id: string, columns: TableCell[]):TableRows {
    return {id, columns};
}

function createTableCell(
    label: string,
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify',
    component?: React.ElementType<React.ThHTMLAttributes<HTMLTableCellElement>>,
    scope?:TableCellBaseProps['scope'],
    chip?: string
): TableCell {
    return {
        label:label, 
        align: align, 
        component: component, 
        scope:scope,
        chip: chip
    };
}

//TODO move date to an API

export function PantryTables() {
    return (
        <>
            <TableView headers={createHeader('Dessert')} rows={createDessertRows()}></TableView>
            <TableView headers={createHeader('Dairies')} rows={createDairyRows()}></TableView>
        </>
    );
}