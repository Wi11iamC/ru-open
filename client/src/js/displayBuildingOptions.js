export default function displayBuildingOptions(campus) {
    const section = document.querySelector('.building-section');
    section.innerHTML = '';

    if (campus == 'BUS') {

        section.innerHTML = 
        `
        <div class="BUS-Section">
              <legend class="campus-section-header">BUS:</legend>
              <div class="building-filter-options">
                <div class="option">
                  <input type="radio" id="ARC" name="building" value="ARC" />
                  <label for="ARC">Aliision Road Classroom</label> <br />
                </div>
                <div class="option">
                  <input type="radio" id="BME" name="building" value="BME" />
                  <label for="BME">BME Building</label>
                </div>
                <div class="option">
                  <input type="radio" id="CCB" name="building" value="CCB" />
                  <label for="CCB">Chemistry & Chemical Biology</label> <br />
                </div>
                <div class="option">
                  <input type="radio" id="COR" name="building" value="COR" />
                  <label for="COR">CoRE Building</label>
                </div>
                <div class="option">
                  <input type="radio" id="EN" name="building" value="EN" />
                  <label for="EN">Engineering Building</label>
                </div>
                <div class="option">
                  <input type="radio" id="HLL" name="building" value="HLL" />
                  <label for="HLL">Hill Center</label>
                </div>
                <div class="option">
                  <input type="radio" id="FBO" name="building" value="FBO" />
                  <label for="FBO">Fiber Optics</label>
                </div>
                <div class="option">
                  <input type="radio" id="PH" name="building" value="PH" />
                  <label for="PH">William Levin Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="PHY" name="building" value="PHY" />
                  <label for="PHY">Physics</label>
                </div>
                <div class="option">
                  <input type="radio" id="RWH" name="building" value="RWH" />
                  <label for="RWH">Richard Weeks</label>
                </div>
                <div class="option">
                  <input type="radio" id="SEC" name="building" value="SEC" />
                  <label for="SEC">T. Alexander Pond (SEC)</label>
                </div>
                <div class="option">
                  <input type="radio" id="WL" name="building" value="WL" />
                  <label for="WL">Wright Rieman Laboratory</label>
                </div>
                <div class="option">
                  <input type="radio" id="EE" name="building" value="EE" />
                  <label for="EE">EE building</label>
                </div>
              </div>
            </div>
        `;


    } else if (campus == 'LIV') {

        section.innerHTML = 
        `
        <div class="LIV-Section">
              <legend class="campus-section-header">LIV:</legend>
              <div class="building-filter-options">
                <div class="option">
                  <input type="radio" id="BE" name="building" value="BE" />
                  <label for="BE">Beck Hall</label> <br />
                </div>
                <div class="option">
                  <input type="radio" id="LSH" name="building" value="LSH" />
                  <label for="LSH">Lucy Stone</label>
                </div>
                <div class="option">
                  <input
                    type="radio"
                    id="LSH-AUD"
                    name="building"
                    value="LSH-AUD"
                  />
                  <label for="LSH-AUD">Lucy Stone Auditorium</label> <br />
                </div>
                <div class="option">
                  <input type="radio" id="RC" name="building" value="RC" />
                  <label for="RC">Rutgers Cinema</label>
                </div>
                <div class="option">
                  <input type="radio" id="TIL" name="building" value="TIL" />
                  <label for="TIL">Tillet Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="JLB" name="building" value="JLB" />
                  <label for="JLB">Janice Levin</label>
                </div>
                <div class="option">
                  <input type="radio" id="BRR" name="building" value="BRR" />
                  <label for="BRR">Business Rockafellar Road</label>
                </div>
              </div>
            </div>
        `;


    } else if (campus == 'CAC') {

        section.innerHTML = 
        `
        <div class="CAC-Section">
              <legend class="campus-section-header">CAC:</legend>
              <div class="building-filter-options">
                <div class="option">
                  <input
                    type="radio"
                    id="AB"
                    name="building"
                    value="AB"
                    required
                  />
                  <label for="AB">Rutgers Academic Building</label> <br />
                </div>
                <div class="option">
                  <input type="radio" id="BH" name="building" value="BH" />
                  <label for="BH">Bishop House</label>
                </div>
                <div class="option">
                  <input type="radio" id="CA" name="building" value="CA" />
                  <label for="CA">Campbell Hall</label> <br />
                </div>
                <div class="option">
                  <input type="radio" id="CI" name="building" value="CI" />
                  <label for="CI"
                    >School of Communication and Information</label
                  >
                </div>
                <div class="option">
                  <input type="radio" id="ED" name="building" value="ED" />
                  <label for="ED">Graduate School of Education</label>
                </div>
                <div class="option">
                  <input type="radio" id="FH" name="building" value="FH" />
                  <label for="FH">Frelinghuysen Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="FH" name="building" value="FH" />
                  <label for="FH">Frelinghuysen Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="HC" name="building" value="HC" />
                  <label for="HC">Honors College</label>
                </div>
                <div class="option">
                  <input type="radio" id="HH" name="building" value="HH" />
                  <label for="HH">HardenBergh Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="MI" name="building" value="MI" />
                  <label for="MI">Milledoler Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="MU" name="building" value="MU" />
                  <label for="MU">Murray Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="SC" name="building" value="SC" />
                  <label for="SC">Scott Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="VD" name="building" value="VD" />
                  <label for="VD">Van Dyck Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="VH" name="building" value="VH" />
                  <label for="VH">Voorhees Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="ZAM" name="building" value="ZAM" />
                  <label for="ZAM">Zimmerli Art Museum</label>
                </div>
              </div>
            </div>
        `;


    } else if (campus == 'CD') {

        section.innerHTML = 
        `
        <div class="CD-Section">
              <legend class="campus-section-header">C/D:</legend>
              <div class="building-filter-options">
                <div class="option">
                  <input type="radio" id="ARH" name="building" value="ARH" />
                  <label for="ARH">Art History Hall</label> <br />
                </div>
                <div class="option">
                  <input type="radio" id="BIO" name="building" value="BIO" />
                  <label for="BIO">Biological Sciences</label>
                </div>
                <div class="option">
                  <input type="radio" id="BL" name="building" value="BL" />
                  <label for="BL">Blake Hall</label> <br />
                </div>
                <div class="option">
                  <input type="radio" id="BT" name="building" value="BT" />
                  <label for="BT">Bartlett Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="CDL" name="building" value="CDL" />
                  <label for="CDL">Cook Douglas Lecture Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="DAV" name="building" value="DAV" />
                  <label for="DAV">Davidson Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="FNH" name="building" value="FNH" />
                  <label for="FNH">Institute for Food Nutrition & Health</label>
                </div>
                <div class="option">
                  <input type="radio" id="FOR" name="building" value="FOR" />
                  <label for="FOR">Foran Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="FS" name="building" value="FS" />
                  <label for="FS">Food Science</label>
                </div>
                <div class="option">
                  <input type="radio" id="HCK" name="building" value="HCK" />
                  <label for="HCK">Hickman Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="HSB" name="building" value="HSB" />
                  <label for="HSB">Heldrich Science Building</label>
                </div>
                <div class="option">
                  <input type="radio" id="LOR" name="building" value="LOR" />
                  <label for="LOR">Loree Classroom Building</label>
                </div>
                <div class="option">
                  <input type="radio" id="KLG" name="building" value="KLG" />
                  <label for="KLG">Global Village Learning Center</label>
                </div>
                <div class="option">
                  <input type="radio" id="RAB" name="building" value="RAB" />
                  <label for="RAB">Ruth Adams Building</label>
                </div>
                <div class="option">
                  <input type="radio" id="TH" name="building" value="TH" />
                  <label for="TH">Thompson Hall</label>
                </div>
                <div class="option">
                  <input type="radio" id="WAL" name="building" value="WAL" />
                  <label for="WAL">Waller Hall</label>
                </div>
              </div>
            </div>
        `;

    }

}