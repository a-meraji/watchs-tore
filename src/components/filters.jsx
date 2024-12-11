"use client";
import React, { useState } from "react";
import DoubleRange from "./ui/rangeSlider/doubleRange";

const FilterComponent = () => {
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSex, setSelectedSex] = useState("all");

  const handleModelChange = (model) => {
    setSelectedModels((prevModels) =>
      prevModels.includes(model)
        ? prevModels.filter((m) => m !== model)
        : [...prevModels, model]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prevBrands) =>
      prevBrands.includes(brand)
        ? prevBrands.filter((b) => b !== brand)
        : [...prevBrands, brand]
    );
  };

  const handleSexChange = (sex) => {
    setSelectedSex(sex);
  };

  const brands = ["Brand 1", "Brand 2", "Brand 3"]; // Replace with your actual brand data

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Price Range Filter */}
      <DoubleRange min={0} max={1000} />

      {/* Model Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Model
        </label>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="classic"
            checked={selectedModels.includes("classic")}
            onChange={() => handleModelChange("classic")}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <label htmlFor="classic" className="ml-2 text-sm text-gray-700">
            Classic
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="digital"
            checked={selectedModels.includes("digital")}
            onChange={() => handleModelChange("digital")}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <label htmlFor="digital" className="ml-2 text-sm text-gray-700">
            Digital
          </label>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Brand
        </label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <label htmlFor={brand} className="ml-2 text-sm text-gray-700">
              {brand}
            </label>
          </div>
        ))}
      </div>

      {/* Sex Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sex
        </label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="men"
            name="sex"
            checked={selectedSex === "men"}
            onChange={() => handleSexChange("men")}
            className="form-radio h-5 w-5 text-indigo-600"
          />
          <label htmlFor="men" className="ml-2 text-sm text-gray-700">
            Men
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="women"
            name="sex"
            checked={selectedSex === "women"}
            onChange={() => handleSexChange("women")}
            className="form-radio h-5 w-5 text-indigo-600"
          />
          <label htmlFor="women" className="ml-2 text-sm text-gray-700">
            Women
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="all"
            name="sex"
            checked={selectedSex === "all"}
            onChange={() => handleSexChange("all")}
            className="form-radio h-5 w-5 text-indigo-600"
          />
          <label htmlFor="all" className="ml-2 text-sm text-gray-700">
            All
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
