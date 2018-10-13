import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">{{nameContent}}</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <div class="row">
            <div class="col-md-12">
                <img src="{{imagePathContent}}" class="img-rounded" alt="{{nameContent}}">
                <div class="img-details">
                    <div class="author">
                        <img src="{{imagePathEnterpriseContent}}" alt="enterprise" class="img-circle img-no-padding border-strong">
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <p>{{dataTextContent}}</p>
            </div>
        </div>
    </div>
    <!-- <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Never mind</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">DELETE</button>
        </div>
    </div> -->
    `
})
export class NgbdModalContent {
    @Input() nameContent: String;
    @Input() dataTextContent: String;
    @Input() imagePathContent: String;
    @Input() imagePathEnterpriseContent: String;

    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent implements OnInit {

    @Input() name: String;
    @Input() imagePath: String;

    dataText: String = '';
    imagePathEnterprise: String = '';

    constructor(private modalService: NgbModal) {}
    
    ngOnInit() {
        // this.testTypeText(this.name);
    }

    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        this.testTypeText(this.name);
        modalRef.componentInstance.nameContent = this.name;
        modalRef.componentInstance.dataTextContent = this.dataText;
        modalRef.componentInstance.imagePathContent = this.imagePath;
        modalRef.componentInstance.imagePathEnterpriseContent = this.imagePathEnterprise;
    }

    testTypeText(str) {

        switch (str) {
            case 'Oysho':
                this.dataText = 'Ecommerce de la tienda Oysho de Inditext';
                this.imagePathEnterprise = 'assets/img/enterprises/Minsait.png'
                break;
            case 'COSRED':
                this.dataText = 'Gestor de monitorización y control de satelites militares desarrollado en Angular 5. Multilenguaje y en tiempo real.';
                this.imagePathEnterprise = 'assets/img/enterprises/Minsait.png'
                break;
            case 'Revista GQ':
                this.dataText = 'Página de la revista GQ en Francia. Desarrollado en Symfony y ES6 la parte de front en vanilla script';
                this.imagePathEnterprise = 'assets/img/enterprises/acilia.png'
                break;
            case 'Hasten Group':
                this.dataText = 'Página corporativa del Grupo Hasten.';
                this.imagePathEnterprise = 'assets/img/enterprises/hasten.png'
                break;
            case 'Telefónica STEMbyme':
                this.dataText = 'Plataforma de enseñanza online pensada para alumnos mayores de 14 años y sus docentes. Multilenguaje para Brasil.';
                this.imagePathEnterprise = 'assets/img/enterprises/telefonica.png'
                break;
            case 'Telefónica ScolarTic':
                this.dataText = 'Plataforma de enseñanza online pensada para alumnos universitarios y sus docentes. Multilenguaje para Brasil.';
                this.imagePathEnterprise = 'assets/img/enterprises/telefonica.png'
                break;
            case 'Telefónica Chile':
                this.dataText = 'Portal de Telefónica Movistar para el mercado en el país de Chile. Desarrollado con Liferay 6.2 EE';
                this.imagePathEnterprise = 'assets/img/enterprises/Vass.png'
                break;
            case 'Axa Golfo':
                this.dataText = 'Portal de AXA par el mercado en los Países del Golfo Pérsico como Emiratos Árabes, Egipto, Qatar, etc. Desarrollado con Liferay 6.2 EE';
                this.imagePathEnterprise = 'assets/img/enterprises/Vass.png'
                break;
            case 'Axa Nigeria':
                this.dataText = 'Portal de AXA tras la absorción de seguros Mansard (la compañía más importante de seguros en África). Desarrollado con Liferay 6.2 EE';
                this.imagePathEnterprise = 'assets/img/enterprises/Vass.png'
                break;
            case 'Axa Argelia':
                this.dataText = 'Colaboración realizada para la maquetación de algunos componentes y portlets de los tarificadores. Desarrollado con Liferay 6.2 EE';
                this.imagePathEnterprise = 'assets/img/enterprises/Vass.png'
                break;
            case 'Axa Wizard':
                this.dataText = 'Portal privado de AXA para poder configurar páginas de las agencias de un país con la introducción de unos pocos datos de la agencia. Desarrollado con Liferay 6.2 EE';
                this.imagePathEnterprise = 'assets/img/enterprises/Vass.png'
                break;
            case 'Axa Digital Kitchen':
                this.dataText = 'Portal de índole privado que sirve como catálogo para los demás países del grupo Axa y construir un portal personalizado con los componentes que ya estan hechos. Desarrollado con Liferay 6.2 EE';
                this.imagePathEnterprise = 'assets/img/enterprises/Vass.png'
                break;
            case 'Código y descuento':
                this.dataText = 'Portal en Joomla con el fin de la venta y promoción de los códigos de descuento de las grandes marcas.';
                this.imagePathEnterprise = 'assets/img/enterprises/autonomo.png'
                break;
            case 'Revista Todofertas':
                this.dataText = 'Proyecto para el lanzamiento de la revista Todofertas. Revista ambientada a las ofertas de trabajo.';
                this.imagePathEnterprise = 'assets/img/enterprises/autonomo.png'
                break;
            case 'Papelería Planos':
                this.dataText = 'Página de negocio para una papelería de barrio con formulario de contacto.';
                this.imagePathEnterprise = 'assets/img/enterprises/autonomo.png'
                break;
            case 'Talleres Garmar':
                this.dataText = 'Página de negocio para una empresa dedicada a la forja con formulario de contacto y galería de imágenes.';
                this.imagePathEnterprise = 'assets/img/enterprises/autonomo.png'
                break;
        
            default:
                break;
        }
    }


}
