import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './entitlement.reducer';
import { IEntitlement } from 'app/shared/model/entitlement.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntitlementDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EntitlementDetail = (props: IEntitlementDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { entitlementEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="finGatewayApp.entitlement.detail.title">Entitlement</Translate> [<b>{entitlementEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="workDayNo">
              <Translate contentKey="finGatewayApp.entitlement.workDayNo">Work Day No</Translate>
            </span>
          </dt>
          <dd>{entitlementEntity.workDayNo}</dd>
          <dt>
            <span id="medicalReimbursement">
              <Translate contentKey="finGatewayApp.entitlement.medicalReimbursement">Medical Reimbursement</Translate>
            </span>
          </dt>
          <dd>{entitlementEntity.medicalReimbursement}</dd>
          <dt>
            <span id="vaccineReimbursement">
              <Translate contentKey="finGatewayApp.entitlement.vaccineReimbursement">Vaccine Reimbursement</Translate>
            </span>
          </dt>
          <dd>{entitlementEntity.vaccineReimbursement}</dd>
          <dt>
            <span id="vitaminsReimbursement">
              <Translate contentKey="finGatewayApp.entitlement.vitaminsReimbursement">Vitamins Reimbursement</Translate>
            </span>
          </dt>
          <dd>{entitlementEntity.vitaminsReimbursement}</dd>
          <dt>
            <span id="opticalReimbursement">
              <Translate contentKey="finGatewayApp.entitlement.opticalReimbursement">Optical Reimbursement</Translate>
            </span>
          </dt>
          <dd>{entitlementEntity.opticalReimbursement}</dd>
        </dl>
        <Button tag={Link} to="/entitlement" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/entitlement/${entitlementEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ entitlement }: IRootState) => ({
  entitlementEntity: entitlement.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EntitlementDetail);
