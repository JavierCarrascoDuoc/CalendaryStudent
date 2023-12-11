import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './calendar.model';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { LoadingController } from '@ionic/angular';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';


const CODIGO = 'CERTAMEN23';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  products: Product[] = [];  // Array to hold the data
  selectedOption: string;
  showButtonAdd: boolean;

  constructor(private http: HttpClient, public modalController: ModalController, private loadingController: LoadingController, private storage: Storage, private navCtrl: NavController) {
    this.selectedOption = '0';
    this.showButtonAdd = false;
    this.init();
   }

  async init() {
    await this.storage.create();
    let emailToCheck = await this.getString();
    if(emailToCheck === null){
      this.navCtrl.navigateForward(['/']);
    }
  }

  async getString() {
    const value = await this.storage.get('email');
    return value;
  }

  ngOnInit() {
  }

  onSelectionChange() {
    console.log('Selected option:', this.selectedOption);
    this.fetchData(this.selectedOption);
  }

  exportToExcel(fileName: string) {
    // Get the table element
    let element = document.getElementById('certamenTabla');
    if (element) {
      console.log(element);
      // Convert the HTML table to a worksheet
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
  
      // Create a new workbook and append the worksheet
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
      // Generate the Excel file
      const wbout: ArrayBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  
      // Save the file
      saveAs(new Blob([wbout], { type: 'application/octet-stream' }), `${fileName}.xlsx`);
    }
  }

  fetchData(opt : string) {
    this.presentLoading();
    this.http.get<Product[]>('https://sumativa2.onrender.com/api/productos/').subscribe(
      (data) => {
        this.products = data.filter(d => d.codigo === this.selectedOption); 
        console.log(this.products) // Assign the data to your array
      },
      (error) => {
        console.error('Error fetching data: ', error);
        this.waitOneSecond();
      },
      () => this.waitOneSecond()
    );
  }

  waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
          this.showButtonAdd = true;
          this.dismissLoading()
        }, 1000); // 1000 milliseconds = 1 second
    });
}

  formatDate(dateString: string): string {
    console.log(dateString);
    if (dateString === "" || dateString === null || dateString === '0') return "N/A";
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  editProduct(idProducto : number) {
    console.log('Button clicked!', idProducto);
    // Add the action you want to perform here
  }

  async addTest(){
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { items: null, type: this.selectedOption }
    });
    await modal.present();

    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned);
      if (dataReturned.data.close && dataReturned.data.entryCreated) {
          this.fetchData(this.selectedOption);
      }
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
        message: 'Obteniento información... Por favor espere.',
        showBackdrop: false,
        spinner: 'circles', // You can choose other spinner types
        // duration: 5000, // Optional: auto-dismiss after a timeout
    });
    await loading.present();
}

async dismissLoading() {
  await this.loadingController.dismiss();
}

  async presentModal(idProducto : number) {
    console.log(this.products.filter(d => d.idProducto === idProducto));
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { items: this.products.filter(d => d.idProducto === idProducto)}
    });
    return await modal.present();
  }

}
