const GeneralTabLi = ({data,generalTabHandler}) => {
	
	const tabClick = () => {
		generalTabHandler(data.title);
	}

	return (
        <li onClick={tabClick} >{data.title}</li>
	);
};
export default GeneralTabLi;
