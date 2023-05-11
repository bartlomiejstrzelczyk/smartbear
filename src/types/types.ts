import { ProjectInfo } from './info';
import {
		PathMapped,
		PathsObj
} from './paths';

export type ResponseShape = {
		readonly info: ProjectInfo;
		readonly paths: PathsObj;
}

export type MappedResponseShape = {
		readonly info: ProjectInfo;
		readonly paths: PathMapped[];
}