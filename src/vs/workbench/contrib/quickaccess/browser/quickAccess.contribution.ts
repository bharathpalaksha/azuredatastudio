/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { localize } from 'vs/nls';
import { IQuickAccessRegistry, Extensions } from 'vs/platform/quickinput/common/quickAccess';
import { Registry } from 'vs/platform/registry/common/platform';
import { HelpQuickAccessProvider } from 'vs/platform/quickinput/browser/helpQuickAccess';
import { ViewQuickAccessProvider } from 'vs/workbench/contrib/quickaccess/browser/viewQuickAccess';
import { CommandsQuickAccessProvider, CommandPaletteEditorAction } from 'vs/workbench/contrib/quickaccess/browser/commandsQuickAccess';
import { registerEditorAction } from 'vs/editor/browser/editorExtensions';

//#region Quick Access Proviers

const registry = Registry.as<IQuickAccessRegistry>(Extensions.Quickaccess);

registry.registerQuickAccessProvider({
	ctor: HelpQuickAccessProvider,
	prefix: HelpQuickAccessProvider.PREFIX,
	placeholder: localize('helpQuickAccessPlaceholder', "Type '{0}' to get help on the actions you can take from here.", HelpQuickAccessProvider.PREFIX),
	helpEntries: [{ description: localize('helpQuickAccess', "Show all Quick Access Providers"), needsEditor: false }]
});

registry.registerQuickAccessProvider({
	ctor: ViewQuickAccessProvider,
	prefix: ViewQuickAccessProvider.PREFIX,
	contextKey: 'inViewsPicker',
	placeholder: localize('viewQuickAccessPlaceholder', "Type the name of a view, output channel or terminal to open."),
	helpEntries: [{ description: localize('viewQuickAccess', "Open View"), needsEditor: false }]
});

registry.registerQuickAccessProvider({
	ctor: CommandsQuickAccessProvider,
	prefix: CommandsQuickAccessProvider.PREFIX,
	contextKey: 'inCommandsPicker',
	placeholder: localize('commandsQuickAccessPlaceholder', "Type the name of a command to run."),
	helpEntries: [{ description: localize('commandsQuickAccess', "Show and Run Commands"), needsEditor: false }]
});

//#endregion


//#region Actions

registerEditorAction(CommandPaletteEditorAction);

//#endregion
