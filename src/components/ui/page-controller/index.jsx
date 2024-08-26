import './style.scss'

const index = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <p className='show-result-title'>Showing result 101-120 Result</p>
            </div>
            <div className='flex gap-[15px] items-center'>
                <p className='select-title'>Item per page</p>
                <select name="#" id="selectId">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
    );
};

export default index;