// import './rs.css';
const rsat = () => {
  return (
    <div class="rating">
      <input type="radio" id="star5" name="rate" value="5" />
      <label for="star5" title="text"></label>
      <input type="radio" id="star4" name="rate" value="4" />
      <label for="star4" title="text"></label>
      <input type="radio" id="star3" name="rate" value="3" />
      <label for="star3" title="text"></label>
      <input type="radio" id="star2" name="rate" value="2" />
      <label for="star2" title="text"></label>
      <input checked="" type="radio" id="star1" name="rate" value="1" />
      <label for="star1" title="text"></label>
    </div>
  );
};

export default rsat;
