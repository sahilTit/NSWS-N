// src/components/CustomInput.jsx

import PropTypes from 'prop-types';

const CustomInput = ({
    type = 'text',
    placeholder = '',
    name,
    value,
    onChange,
    onBlur,
    isInvalid = false,
    errorMessage = '',
    label,
    showError,
    ...props
}) => {
    return (
        <div className="mb-4">
            {label && (
                <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor={name}>
                    {label}
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isInvalid && showError ? 'border-red-500' : 'border-gray-300'
                    }`}
                {...props}
            />
            {isInvalid && showError && (
                <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
            )}
        </div>
    );
};

CustomInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'number']).isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    isInvalid: PropTypes.bool,
    errorMessage: PropTypes.string,
    label: PropTypes.string,
    showError: PropTypes.bool.isRequired,
};

export default CustomInput;
