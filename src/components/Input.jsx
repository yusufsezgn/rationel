import React from "react";

const Input = ({
  type,
  placeholder,
  label,
  name,
  handleBlur,
  handleChange,
  value,
  errors,
  touched,
  error,
}) => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-auto gap-3">
      <label className="text-lg font-medium text-white">{label}</label>
      <input
        name={name}
        onBlur={handleBlur}
        placeholder={placeholder}
        id=""
        type={type}
        errors={errors}
        value={value}
        onChange={handleChange}
        className="bg-white appearance-none border-2 rounded h-10 px-4 w-full text-gray-700 leading-tight focus:outline-secondary focus:outline-8 transition-all focus:border-secondary"
      />
      <span className="text-red-500 font-medium text-sm">
        {errors}
      </span>
    </div>
  );
};

export default Input;
