/*!
 * Sortable Tree
 *
 * (c) 2023 Marc Anton Dahmen, MIT license
 */

import { NodeComponent } from './Node';
import { DropResultData, Styles } from './types';

export const defaultRenderLabel = (data: any): string => {
	return data.title;
};

export const defaultStyles: Styles = {
	tree: 'tree',
	node: 'tree__node',
	nodeHover: 'tree__node--hover',
	nodeDropBefore: 'tree__node--drop-before',
	nodeDropInside: 'tree__node--drop-inside',
	nodeDropAfter: 'tree__node--drop-after',
	label: 'tree__label',
	subnodes: 'tree__subnodes',
	collapse: 'tree__collapse',
};

export const defaultOnChange = (result: DropResultData): void => {};

export const defaultConfirm = async (
	moved: NodeComponent,
	parentNode: NodeComponent
): Promise<boolean> => {
	return true;
};