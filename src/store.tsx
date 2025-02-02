import React, {useState, createContext, Dispatch, SetStateAction} from 'react';

interface IStore {
	offcanvas: boolean;
	setOffcanvas: Dispatch<React.SetStateAction<boolean>>;
}

export const Store = createContext<Partial<IStore>>({});

export const StoreProvider = ({children}: {children: JSX.Element}) => {
	const [offcanvas, setOffcanvas] = useState(false);
	return (
		<Store.Provider value={{offcanvas, setOffcanvas}}>
			{children}
		</Store.Provider>
	);
}
