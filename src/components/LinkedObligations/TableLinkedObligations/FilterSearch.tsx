// Copyright (c) Helio Chissini de Castro, 2023. Part of the SW360 Frontend Project.

// This program and the accompanying materials are made
// available under the terms of the Eclipse Public License 2.0
// which is available at https://www.eclipse.org/legal/epl-2.0/

// SPDX-License-Identifier: EPL-2.0
// License-Filename: LICENSE

'use client'

interface Props {
    title?: string
    searchFunction?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}
function FilterSearch({ title, searchFunction }: Props) {
    return (
        <div
            style={{
                fontSize: '14px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 'auto',
            }}
        >
            <label>Search: </label>
            &nbsp;&nbsp;
            <input
                className='form-control'
                type='text'
                name={title}
                onInput={searchFunction}
                style={{ width: '238px', height: '32px' }}
            />
        </div>
    )
}

export default FilterSearch
