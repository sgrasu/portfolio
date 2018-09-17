/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare module "*.JSON" {
	const value: any;
	export default value;
}
declare var particles:any;