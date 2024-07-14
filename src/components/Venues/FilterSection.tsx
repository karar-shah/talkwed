"use client";
import React, { useState } from "react";
import Checkbox from "@/common/Checkbox";
import Typography from "@/common/Typography";
import SelectItems from "@/common/Select";

interface CheckboxItem {
  id: string;
  name: string;
  label: string;
  checked: boolean;
}

const FilterSection = () => {
  const [priceFilter, setPriceFilter] = useState<CheckboxItem[]>([
    {
      id: "price1",
      name: "priceUnder1000",
      label: "Under $1,000",
      checked: false,
    },
    {
      id: "price2",
      name: "priceUnder2000",
      label: "$1,000 - $1,999",
      checked: false,
    },
    {
      id: "price3",
      name: "priceUnder3000",
      label: "$2,000 - $2,999",
      checked: false,
    },
    {
      id: "price4",
      name: "priceUnder4000",
      label: "$3,000 - $3,999",
      checked: false,
    },
    {
      id: "price5",
      name: "priceUnder5000",
      label: "$4,000 plus",
      checked: false,
    },
    // Add more priceFilter as needed
  ]);

  const [guestFilter, setGuestFilter] = useState<CheckboxItem[]>([
    { id: "price1", name: "priceUnder1000", label: "0 - 99", checked: false },
    {
      id: "price2",
      name: "priceUnder2000",
      label: "$100 - $199",
      checked: false,
    },
    {
      id: "price3",
      name: "priceUnder3000",
      label: "$200 - $299",
      checked: false,
    },
    {
      id: "price4",
      name: "priceUnder4000",
      label: "$300 - $399",
      checked: false,
    },
    {
      id: "price5",
      name: "priceUnder5000",
      label: "$400 plus",
      checked: false,
    },
  ]);

  const [settings, setSettings] = useState<CheckboxItem[]>([
    { id: "price1", name: "priceUnder1000", label: "Indoor", checked: false },
    {
      id: "price2",
      name: "priceUnder2000",
      label: "Covered Outdoor",
      checked: false,
    },
    {
      id: "price3",
      name: "priceUnder3000",
      label: "Uncovered Outdoor",
      checked: false,
    },
  ]);

  const [dateTo, setDateTo] = useState(false);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");

  const handleDateTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateTo(e.target.checked);
  };

  const handlePriceFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedCheckboxes = [...priceFilter];
    updatedCheckboxes[index].checked = event.target.checked;
    setPriceFilter(updatedCheckboxes);
  };

  const handleGuestFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedCheckboxes = [...guestFilter];
    updatedCheckboxes[index].checked = event.target.checked;
    setGuestFilter(updatedCheckboxes);
  };

  const handleSettings = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedCheckboxes = [...settings];
    updatedCheckboxes[index].checked = event.target.checked;
    setSettings(updatedCheckboxes);
  };

  const handleToDateChange = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      e.target.type = "text";
      e.target.value = "to";
    }
  };

  const handleFromDateChange = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      e.target.type = "text";
      e.target.value = "from";
    }
  };

  return (
    <div>
      <Typography component="h2" title="Filters" className="text-2xl mb-3" />
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-3">
        <SelectItems
          label="City/Town"
          placeholder=""
          className=""
          items={[
            { key: 1, label: "New York" },
            { key: 2, label: "Dallas" },
          ]}
        />
      </div>

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-2">
        <SelectItems
          label="Venue Type"
          placeholder="Select Service"
          className=""
          items={[
            { key: 1, label: "New York" },
            { key: 2, label: "Dallas" },
          ]}
        />
      </div>
      <Typography component="h3" title="Price" className="text-lg my-4" />

      {priceFilter.map((checkbox, index) => (
        <Checkbox
          key={checkbox.id}
          id={checkbox.id}
          name={checkbox.name}
          label={checkbox.label}
          checked={checkbox.checked}
          onChange={(event) => handlePriceFilterChange(event, index)}
        />
      ))}

      <Typography
        component="h3"
        title="Number of guests"
        className="text-lg mb-2 mt-4"
      />

      {guestFilter.map((checkbox, index) => (
        <Checkbox
          key={checkbox.id}
          id={checkbox.id}
          name={checkbox.name}
          label={checkbox.label}
          checked={checkbox.checked}
          onChange={(event) => handleGuestFilterChange(event, index)}
        />
      ))}

      <Typography
        component="h3"
        title="Settings"
        className="text-lg mb-2 mt-4"
      />
      {settings.map((checkbox, index) => (
        <Checkbox
          key={checkbox.id}
          id={checkbox.id}
          name={checkbox.name}
          label={checkbox.label}
          checked={checkbox.checked}
          onChange={(event) => handleSettings(event, index)}
        />
      ))}

      <Typography component="h3" title="Amenities" className="text-lg mt-3" />

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <SelectItems
          label=""
          placeholder="Select amenities"
          className=""
          items={[
            { key: 1, label: "value1" },
            { key: 2, label: "value2" },
          ]}
        />
      </div>

      <Typography
        component="h3"
        title="Availability"
        className="text-lg mb-2 mt-4"
      />
      <div className="flex items-center justify-start ">
        <div className="flex items-center gap-2">
          <Checkbox
            id="to"
            name="to"
            label=""
            checked={dateTo}
            onChange={handleDateTo}
          />
          <input
            type="text"
            placeholder="To"
            value={toDate}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={handleToDateChange}
            onChange={(e) => setToDate(e.target.value)}
            className="border p-1 ml-1 rounded-md w-24"
          />
        </div>
        <div className="flex items-center ml-3 gap-2">
          <Checkbox
            id="from"
            name="from"
            label=""
            checked={dateTo}
            onChange={handleDateTo}
          />
          <input
            type="text"
            placeholder="From"
            value={fromDate}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={handleFromDateChange}
            onChange={(e) => setFromDate(e.target.value)}
            className="border p-1 ml-1 rounded-md w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
