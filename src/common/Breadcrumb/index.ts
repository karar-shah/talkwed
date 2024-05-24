export {default} from './Breadcrumb'
export interface Breadcrumb{
    title:string,
    link:string,
    active?:boolean
}
export interface BreadcrumbProps{
    list:Breadcrumb[]
}