import react from 'react';

function BookingForm() {
    return (
<form>
    <label>
        Naam:
        <input type="text" name='name' />
    </label>
    <label>
        Email:
        <input type="email" name='email' />
    </label>
    <label>
        Datum:
        <input type="date" name='datum' />
    </label>
    <button>
        Klik hier om te boeken!
    </button>
</form>
    )
}

export default BookingForm;