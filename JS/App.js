var app = new function(){
    this.el = document.getElementById('countries');
    this.countries = ['Perú','Brasil','Chile','Bolivia'];
    this.Count = function(data){
        var el = document.getElementById('counter');
        var name = 'País';
        if(data){
            if(data>1){
                name = 'Países';
            }
            el.innerHTML = data + ' ' +name;
        }else{
            el.innerHTML = 'Ningún ' +name;
        }
    };
    this.FetchAll = function(){
        var data = '';
        if (this.countries.length > 0){
            for(i=0;i< this.countries.length;i++){
                data += '<tr>';
                data += '<td>' + this.countries[i] + '</td>';
                data += '<td><button onclick="app.Edit(' + i + ')" class="btn btn-warning">Editar</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')" class="btn btn-danger">Borrar</button></td>';
                data += '</tr>';
            }
        }
        this.Count(this.countries.length);
        return this.el.innerHTML = data;
    }
    this.Add = function () {
        el = document.getElementById('add-name');
        // Get the value
        var country = el.value;
        if (country) {
        // Add the new value
        this.countries.push(country.trim());
        // Reset input value
        el.value = '';
        // Dislay the new list
        this.FetchAll();
        }
    };
this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.countries[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
    // Get value
    var country = el.value;
    if (country) {
        // Edit value
        self.countries.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
        }
    }
};
this.Delete = function (item) {
    // Delete the current row
    this.countries.splice(item, 1);
    // Display the new list
    this.FetchAll();
};
}
app.FetchAll();
function CloseInput() {
document.getElementById('spoiler').style.display = 'none';
}