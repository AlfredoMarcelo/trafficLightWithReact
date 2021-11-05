import React, { useState } from "react";

export function Semaforo() {
	const [seleccionColor, setSelectedColor] = useState("verde");
	return (
		<div className="row ">
			<div className="col-6 d-flex justify-content-center p-0 m-0">
				<div className="semaforo">
					<div
						onClick={() => setSelectedColor("roja")}
						className={
							"luz roja" +
							(seleccionColor === "roja" ? " iluminacion" : "")
						}></div>
					<div
						onClick={() => setSelectedColor("amarilla")}
						className={
							"luz amarilla my-2" +
							(seleccionColor === "amarilla"
								? " iluminacion"
								: "")
						}></div>
					<div
						onClick={() => setSelectedColor("verde")}
						className={
							"luz verde" +
							(seleccionColor === "verde" ? " iluminacion" : "")
						}></div>
				</div>
			</div>
		</div>
	);
}
