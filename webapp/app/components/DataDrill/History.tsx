/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import * as React from 'react'
import Icon from 'antd/lib/icon'
import Breadcrumb from 'antd/lib/breadcrumb'

export interface IDataDrillHistoryProps {
  itemId?: number
  widgetId: number
  drillHistory?: any
  onSelectDrillHistory?: (history?: any, item?: number, itemId?: number, widgetId?: number) => void
}

export function DataDrillHistory (props: IDataDrillHistoryProps) {
  const {drillHistory, onSelectDrillHistory, itemId, widgetId} = props
  return (
    <Breadcrumb separator=">">
      {<Breadcrumb.Item onClick={drill(false, -1)} key={`dhall`}>返回</Breadcrumb.Item>}
      {
        drillHistory && drillHistory.length ? drillHistory.map((history, index) => (
          <Breadcrumb.Item onClick={drill(history, index)} key={`dh${index}`}>
            {history.name}<Icon type={`${history.type === 'up' ? 'arrow-up' : 'arrow-down'}`} />
          </Breadcrumb.Item>
        )) : ''
      }
    </Breadcrumb>
  )
  function drill (history, item) {
    return function () {
      if (onSelectDrillHistory) {
        onSelectDrillHistory(history, item, itemId, widgetId)
      }
    }
  }
}



export default DataDrillHistory
