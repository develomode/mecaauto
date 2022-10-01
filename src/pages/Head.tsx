// import { useEffect, useState } from "react";

// import { getBrands, createBrand, deleteBrand } from "../api/brands";

// import { IBrand } from "../shared/interfaces";

export default function Head() {
  // const [brands, setBrands] = useState<IBrand[]>([]);
  // const [name, setName] = useState("");

  // const create = async () => {
  //   const json: IBrand = { name: name };
  //   await createBrand(json).then((response) => {
  //     setName("");
  //   });
  //   retrieveData();
  // };

  // const delet = async (id: number) => {
  //   await deleteBrand(id).then((response) => {
  //     retrieveData();
  //   });
  // };

  // const retrieveData = async () => {
  //   await getBrands().then((response) => {
  //     console.log(response["hydra:member"]);
  //     setBrands(response["hydra:member"]);
  //   });
  // };

  // useEffect(() => {
  //   retrieveData();
  // }, []);

  return (
    <div>
      {/* {brands?.map((brand, i) => {
        return (
          <div key={i}>
            <button
              onClick={(e) => {
                delet(brand.id);
              }}
            >
              {brand.name}
            </button>
          </div>
        );
      })} */}

      <div style={{ background: "#ffffff", padding: "16px", gap: "10px" }}>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            create();
          }}
        >
          Créer
        </button>
      </div>
    </div>
  );
}
