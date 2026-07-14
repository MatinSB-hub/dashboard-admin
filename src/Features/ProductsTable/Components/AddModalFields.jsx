import { userRoles } from "../../../data/Users";

function AddModalFields({ newData, onChange, fields }) {
  const ChangeHandler = (key, value) => {
    const product = {
      ...newData,
      [key]: value,
    };
    onChange(product);
  };

  return (
    <div>
      {fields.map((field) => (
        <div key={field.key}>
          <label className="text-sm select-none text-neutral-500">
            {field.lable}
          </label>
          {field.type === "textarea" ? (
            <textarea
              className="block mt-2 text-sm min-h-[140px] px-3 rounded-md bg-gradient-to-t from-zinc-100/70 shadow placeholder:text-sm border outline-none primary-border-color w-full"
              value={newData[field.key]}
              onChange={(e) => ChangeHandler(field.key, e.target.value)}
            />
          ) : field.type === "select" ? (
            <select
              className="block mt-2 px-3 rounded-md bg-gradient-to-t from-zinc-100/70 shadow placeholder:text-sm h-10 border outline-none primary-border-color w-full"
              value={newData[field.key]}
              onChange={(e) => ChangeHandler(field.key, e.target.value)}
            >
              <option value={true}>منتشر شده</option>
              <option value={false}>منتشر نشده</option>
            </select>
          ) : field.type === "radio" ? (
            <div className="flex flex-col items-start gap-2 pt-2">
              <div className="flex justify-center items-center gap-2">
                <input
                  type={field.type}
                  className="px-3"
                  name={field.key}
                  checked={newData[field.key]?.value === "ADMIN" && true}
                  onChange={(e) => ChangeHandler(field.key, userRoles[1])}
                />
                <label>مدیر</label>
              </div>
              <div className="flex justify-center items-center gap-2">
                <input
                  type={field.type}
                  className="px-3"
                  name={field.key}
                  checked={newData[field.key]?.value === "SUPPORT" && true}
                  onChange={(e) => ChangeHandler(field.key, userRoles[2])}
                />
                <label>پشتیبان</label>
              </div>
              <div className="flex justify-center items-center gap-2">
                <input
                  type={field.type}
                  className="px-3"
                  name={field.key}
                  checked={newData[field.key]?.value === "USER" && true}
                  onChange={(e) => ChangeHandler(field.key, userRoles[0])}
                />
                <label>کاربر</label>
              </div>
            </div>
          ) : (
            <input
              type={field.type}
              className="block mt-2 px-3 rounded-md bg-gradient-to-t from-zinc-100/70 shadow placeholder:text-sm h-10 border outline-none primary-border-color w-full"
              value={newData[field.key]}
              onChange={(e) => ChangeHandler(field.key, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default AddModalFields;
