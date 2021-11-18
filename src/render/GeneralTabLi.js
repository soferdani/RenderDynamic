const GeneralTabLi = ({content, pressHandler }) => {
	
	const tabClick = () => {
		pressHandler(content);
	}

	return (
        <li onClick={tabClick} >{content}</li>
	);
};
export default GeneralTabLi;
