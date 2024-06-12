/* eslint-disable react/prop-types */
import { FormInputText } from './inputscomponents/FormInputText.jsx'
//import { NumericFormat } from 'react-number-format';
//import PropTypes from 'prop-types';




/*const NumericFormatAdapter = forwardRef(
    function NumericFormatAdapter(props, ref) {
        const { onChange, ...other } = props;
    
        return (
        <NumericFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
            onChange({
                target: {
                name: props.name,
                value: values.value,
                },
            });
            }}
            decimalScale={0}
            decimalSeparator=','
            thousandSeparator='.'
            valueIsNumericString
            //prefix="$"
        />
        );
    },
);
NumericFormatAdapter.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};*/

export default function InputsType({campo, className}){    
    switch (campo.FDI_TipoCampo) {
        case 'C':   //Texto tamaño mediano
            return <FormInputText campo={campo} className={className}/>
        default:
            return <FormInputText campo={campo} className={className}/>
    }
}