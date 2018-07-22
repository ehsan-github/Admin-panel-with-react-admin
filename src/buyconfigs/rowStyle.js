const rowStyle = (record, index, defaultStyle = {}) => {
    if (record.buyable)
        return { ...defaultStyle, backgroundColor: '#dfd' };
    return { ...defaultStyle, backgroundColor: '#fdd' };
};

export default rowStyle;
