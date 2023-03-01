/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { URI } from 'vs/base/common/uri';
import * as nls from 'vs/nls';
import { Action2, registerAction2 } from 'vs/platform/actions/common/actions';
import { ServicesAccessor } from 'vs/platform/instantiation/common/instantiation';
import { IEditorCommandsContext } from 'vs/workbench/common/editor';

export class ChangeSqlNotebookConnectionAction extends Action2 {

	static readonly ID = 'editor.action.changeSqlNotebookConnection';

	constructor() {
		super({
			id: ChangeSqlNotebookConnectionAction.ID,
			title: {
				value: nls.localize('ChangeSqlNotebookConnection', "Change SQL Notebook Connection"),
				original: 'Change SQL Notebook Connection'
			}
		});
	}

	override async run(accessor: ServicesAccessor, resourceOrContext?: URI | IEditorCommandsContext): Promise<void> {

	}
}

registerAction2(ChangeSqlNotebookConnectionAction);
