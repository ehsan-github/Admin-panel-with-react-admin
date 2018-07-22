const rowStyle = (record, index, defaultStyle = {}) => {
    if (record.sellable)
        return { ...defaultStyle, backgroundColor: '#dfd' };
    return { ...defaultStyle, backgroundColor: '#fdd' };
};

export default rowStyle;
